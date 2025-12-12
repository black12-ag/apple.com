import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface AssetManifest {
  images: Array<{ url: string; folder: string }>;
  videos: Array<{ url: string; folder: string }>;
  downloaded: number;
  failed: number;
}

const manifest: AssetManifest = {
  images: [],
  videos: [],
  downloaded: 0,
  failed: 0
};

const assetsDir = path.join(__dirname, '../public/assets');
const imagesDir = path.join(assetsDir, 'images');
const videosDir = path.join(assetsDir, 'videos');

const pagesToCrawl = [
  { url: 'https://www.apple.com/', folder: 'home' },
  { url: 'https://www.apple.com/mac/', folder: 'mac' },
  { url: 'https://www.apple.com/ipad/', folder: 'ipad' },
  { url: 'https://www.apple.com/iphone/', folder: 'iphone' },
  { url: 'https://www.apple.com/watch/', folder: 'watch' },
  { url: 'https://www.apple.com/airpods/', folder: 'airpods' },
  { url: 'https://www.apple.com/tv-home/', folder: 'tv-home' },
  { url: 'https://www.apple.com/entertainment/', folder: 'entertainment' },
];

async function ensureDirectories() {
  const dirs = [assetsDir, imagesDir, videosDir];
  pagesToCrawl.forEach(page => {
    dirs.push(path.join(imagesDir, page.folder));
    dirs.push(path.join(videosDir, page.folder));
  });

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

function sanitizeFilename(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname.split('/').pop() || 'image.jpg';
    // Remove query params if any in filename
    return filename.split('?')[0].replace(/[^a-zA-Z0-9._-]/g, '_');
  } catch (e) {
    return 'unknown_' + Math.random().toString(36).substring(7) + '.jpg';
  }
}

async function downloadFile(url: string, filepath: string): Promise<boolean> {
  try {
    // Check if valid URL
    new URL(url);

    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    fs.writeFileSync(filepath, response.data);
    return true;
  } catch (error: any) {
    // console.error(`Failed to download ${url}:`, error.message);
    return false;
  }
}

async function extractAssets(url: string, folder: string) {
  console.log(`Fetching ${url}...`);

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });

    const $ = cheerio.load(response.data);
    const imageUrls = new Set<string>();
    const videoUrls = new Set<string>();

    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src');
      if (src && src.startsWith('http')) {
        imageUrls.add(src);
      }
    });

    $('source').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src');
      if (src && src.startsWith('http')) {
        if (src.includes('.mp4') || src.includes('.webm')) {
          videoUrls.add(src);
        }
      }
    });

    const styleContent = response.data;
    const bgImageRegex = /url\(['"]?(https?:\/\/[^'")\s]+\.(jpg|jpeg|png|gif|webp|svg))['"]?\)/gi;
    let match;
    while ((match = bgImageRegex.exec(styleContent)) !== null) {
      imageUrls.add(match[1]);
    }

    // Add to manifest
    imageUrls.forEach(u => {
      if (!manifest.images.some(img => img.url === u)) {
        manifest.images.push({ url: u, folder });
      }
    });

    videoUrls.forEach(u => {
      if (!manifest.videos.some(vid => vid.url === u)) {
        manifest.videos.push({ url: u, folder });
      }
    });

    console.log(`Found ${imageUrls.size} images and ${videoUrls.size} videos on ${folder}`);
  } catch (error: any) {
    console.error(`Error fetching ${url}:`, error.message);
  }
}

async function downloadAssets() {
  console.log('\nDownloading images...');

  const maxPerCategory = 20;
  const categoryCounts: Record<string, number> = {};

  for (const img of manifest.images) {
    const count = categoryCounts[img.folder] || 0;
    if (count >= maxPerCategory) continue;

    // Ensure URL is absolute/valid before proceeding
    if (!img.url.startsWith('http')) continue;

    const filename = sanitizeFilename(img.url);
    const filepath = path.join(imagesDir, img.folder, filename);

    if (fs.existsSync(filepath)) {
      categoryCounts[img.folder] = count + 1;
      continue;
    }

    console.log(`[${img.folder}] Downloading ${filename}...`);
    const success = await downloadFile(img.url, filepath);
    if (success) {
      manifest.downloaded++;
      categoryCounts[img.folder] = count + 1;
    } else {
      manifest.failed++;
    }
    // Small delay
    await new Promise(resolve => setTimeout(resolve, 50));
  }

  console.log('\nDownloading videos...');
  const maxVideosPerCategory = 3;
  const videoCategoryCounts: Record<string, number> = {};

  for (const vid of manifest.videos) {
    const count = videoCategoryCounts[vid.folder] || 0;
    if (count >= maxVideosPerCategory) continue;

    if (!vid.url.startsWith('http')) continue;

    const filename = sanitizeFilename(vid.url);
    const filepath = path.join(videosDir, vid.folder, filename);

    if (fs.existsSync(filepath)) {
      videoCategoryCounts[vid.folder] = count + 1;
      continue;
    }

    console.log(`[${vid.folder}] Downloading ${filename}...`);
    const success = await downloadFile(vid.url, filepath);
    if (success) {
      manifest.downloaded++;
      videoCategoryCounts[vid.folder] = count + 1;
    } else {
      manifest.failed++;
    }
    await new Promise(resolve => setTimeout(resolve, 200));
  }
}

async function saveManifest() {
  const manifestPath = path.join(assetsDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest saved to ${manifestPath}`);
  console.log(`Downloaded: ${manifest.downloaded}, Failed: ${manifest.failed}`);
}

async function main() {
  console.log('Apple.com Asset Crawler & Downloader\n');

  await ensureDirectories();

  // Sequential crawl to avoid rate limiting
  for (const page of pagesToCrawl) {
    await extractAssets(page.url, page.folder);
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  await downloadAssets();
  await saveManifest();

  console.log('\nAsset download complete!');
}

main().catch(console.error);
