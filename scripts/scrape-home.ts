
import fs from 'fs';
import path from 'path';
import https from 'https';

const HOME_URL = 'https://www.apple.com/';
const ASSET_DIR = path.resolve('src/assets/home');

// Ensure dir exists
if (!fs.existsSync(ASSET_DIR)) fs.mkdirSync(ASSET_DIR, { recursive: true });

const downloadFile = (url: string, filename: string) => {
    return new Promise((resolve) => {
        const filepath = path.join(ASSET_DIR, filename);
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename} from ${url}`);
                resolve(true);
            });
        }).on('error', (err) => {
            console.error(`Error downloading ${url}:`, err.message);
            resolve(false);
        });
    });
};

const run = async () => {
    console.log('Fetching apple.com...');
    const html = await new Promise<string>((resolve) => {
        https.get(HOME_URL, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
    });

    // Regex for mzstatic jpgs
    // Matches https://... .jpg 
    const urlRegex = /https:\/\/is1-ssl\.mzstatic\.com\/[^"'\s,>]+\.jpg/g;
    const matches = html.match(urlRegex) || [];

    // Unique
    const uniqueUrls = [...new Set(matches)];

    console.log(`Found ${uniqueUrls.length} mzstatic images.`);

    // Filter for large images + promos (allow 400px+)
    const largeImages = uniqueUrls.filter(u => /[4-9]\d{2}x\d{2,}|[1-9]\d{3}x\d{2,}/.test(u));

    console.log(`Found ${largeImages.length} heavy images.`);

    // Download top 80
    let count = 1;
    for (const url of largeImages.slice(0, 80)) {
        await downloadFile(url, `home_asset_${count}.jpg`);
        count++;
    }

    console.log('Done.');
};

run();
