import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES = [
  { name: 'home', url: 'https://www.apple.com/' },
  { name: 'mac', url: 'https://www.apple.com/mac/' },
  { name: 'ipad', url: 'https://www.apple.com/ipad/' },
  { name: 'iphone', url: 'https://www.apple.com/iphone/' },
  { name: 'watch', url: 'https://www.apple.com/watch/' },
  { name: 'airpods', url: 'https://www.apple.com/airpods/' },
  { name: 'vision', url: 'https://www.apple.com/apple-vision-pro/' },
  { name: 'tv-home', url: 'https://www.apple.com/tv-home/' },
];

const assetsDir = path.join(__dirname, '../public/assets');

async function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function downloadFile(url: string, filepath: string): Promise<boolean> {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      timeout: 30000,
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    });
    fs.writeFileSync(filepath, response.data);
    return true;
  } catch (error: any) {
    return false;
  }
}

function extractImageUrls(html: string): string[] {
  const urls = new Set<string>();
  
  const patterns = [
    /https?:\/\/[^\s"']+\.(jpg|jpeg|png|webp|svg)/gi,
    /\/v\/[^\s"']+\.(jpg|jpeg|png|webp|svg)/gi,
    /\/assets-www\/[^\s"']+\.(jpg|jpeg|png|webp|svg)/gi,
  ];

  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      let url = match[0];
      if (url.startsWith('/')) {
        url = 'https://www.apple.com' + url;
      }
      urls.add(url);
    }
  });

  return Array.from(urls);
}

async function downloadPageAssets(page: { name: string; url: string }) {
  console.log(`\n📥 Downloading assets for ${page.name}...`);
  
  const pageDir = path.join(assetsDir, page.name);
  await ensureDir(pageDir);

  try {
    const response = await axios.get(page.url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    });

    const imageUrls = extractImageUrls(response.data);
    console.log(`   Found ${imageUrls.length} images`);

    let downloaded = 0;
    const limit = 20;

    for (let i = 0; i < Math.min(imageUrls.length, limit); i++) {
      const url = imageUrls[i];
      const filename = `${page.name}_${i + 1}.jpg`;
      const filepath = path.join(pageDir, filename);

      const success = await downloadFile(url, filepath);
      if (success) downloaded++;
      
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    console.log(`   ✅ Downloaded ${downloaded}/${Math.min(imageUrls.length, limit)} images`);
    return downloaded;
  } catch (error: any) {
    console.error(`   ❌ Error: ${error.message}`);
    return 0;
  }
}

async function main() {
  console.log('🍎 Apple Website Asset Downloader\n');
  console.log('Downloading assets from all product pages...');

  await ensureDir(assetsDir);

  let totalDownloaded = 0;

  for (const page of PAGES) {
    const count = await downloadPageAssets(page);
    totalDownloaded += count;
  }

  console.log(`\n✅ Complete! Downloaded ${totalDownloaded} total assets.`);
  
  const manifest = {
    pages: PAGES.map(p => p.name),
    totalAssets: totalDownloaded,
    downloadedAt: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(assetsDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
}

main().catch(console.error);
