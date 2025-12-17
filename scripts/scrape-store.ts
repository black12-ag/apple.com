
import fs from 'fs';
import path from 'path';
import https from 'https';

const STORE_URL = 'https://www.apple.com/store';
const ASSET_DIR = path.resolve('src/assets/store');

if (!fs.existsSync(ASSET_DIR)) fs.mkdirSync(ASSET_DIR, { recursive: true });

const downloadFile = (url: string, filename: string) => {
    return new Promise((resolve) => {
        const filepath = path.join(ASSET_DIR, filename);
        // Clean url
        const cleanUrl = url.replace(/^[a-z]+:\/\//i, 'https://');

        const file = fs.createWriteStream(filepath);
        https.get(cleanUrl, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename}`);
                resolve(true);
            });
        }).on('error', (err) => {
            console.error(`Error downloading ${url}:`, err.message);
            resolve(false);
        });
    });
};

const run = async () => {
    console.log('Fetching apple.com/store...');
    const html = await new Promise<string>((resolve) => {
        https.get(STORE_URL, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
    });

    // Capture all mzstatic images (jpg/png)
    const urlRegex = /https:\/\/[^"'\s,>]+\.(?:jpg|png)/g;
    const matches = html.match(urlRegex) || [];
    const uniqueUrls = [...new Set(matches)];

    console.log(`Found ${uniqueUrls.length} total images.`);

    // Filter for likely content images (larger sizes often indicate tiles/products)
    // Looking for dimensions in URL or just taking a sample
    const contentImages = uniqueUrls.filter(u =>
        u.includes('mzstatic') &&
        (/[0-9]+x[0-9]+/.test(u) || u.includes('store-card'))
    );

    console.log(`Found ${contentImages.length} content candidates.`);

    // Download a selection to populate the page
    let count = 1;
    for (const url of contentImages.slice(0, 30)) {
        // Try to keep extension
        const ext = url.endsWith('.png') ? 'png' : 'jpg';
        await downloadFile(url, `store_asset_${count}.${ext}`);
        count++;
    }

    console.log('Done.');
};

run();
