import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../public/assets/mac/icons');

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

const icons = [
    { name: 'macbook_air.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookair15.macbookair13_7e8b978ec.svg' },
    { name: 'macbook_pro.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookpro16.macbookpro14_c495bb45b.svg' },
    { name: 'imac.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/imac24_065a2bf21.svg' },
    { name: 'mac_mini.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macmini_f7eabee7b.svg' },
    { name: 'mac_studio.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macstudio_d48bbc5a3.svg' },
    { name: 'mac_pro.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macpro_a0f334173.svg' },
    { name: 'help_me_choose.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/helpmechoose_dc7206dee.svg' },
    { name: 'compare.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/compare_e6faa4436.svg' },
    { name: 'displays.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/displays_ce60bd4d1.svg' },
    { name: 'accessories.svg', url: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/accessories_3bf8fc936.svg' },
];

async function downloadFile(url: string, filename: string) {
    const filepath = path.join(assetsDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        fs.writeFileSync(filepath, response.data);
        console.log(`Saved ${filename}`);
    } catch (error: any) {
        console.error(`Failed to download ${url}: ${error.message}`);
    }
}

async function main() {
    console.log('Starting Mac Icon download...');
    for (const icon of icons) {
        await downloadFile(icon.url, icon.name);
    }
    console.log('Download complete.');
}

main().catch(console.error);
