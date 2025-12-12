import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../public/assets/mac/real');

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

const assets = [
    { name: 'macbook_air_chip.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mba_13_15_a59d7a2f1_2x.jpg' },
    { name: 'macbook_pro_chip.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mbp_14_16_ebb5c3a77_2x.jpg' },
    { name: 'imac_chip.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/imac_24_744f0cde0_2x.jpg' },
    { name: 'mac_mini_chip.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mac_mini_8739c30c0_2x.jpg' },
    { name: 'mac_studio_chip.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mac_studio_b773fb402_2x.jpg' },
    { name: 'mac_pro_chip.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mac_pro_c3fa0c4db_2x.jpg' },
    { name: 'studio_display.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/studio_display_e7efd72b3_2x.jpg' },
    { name: 'pro_display.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/pro_display_70585e9c1_2x.jpg' },
    { name: 'why_mac_intelligence.jpg', url: 'https://www.apple.com/assets-www/en_WW/mac/feature_card/medium/fc_performance_8cdb951ea_2x.jpg' }
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
    console.log('Starting Mac asset download...');
    for (const asset of assets) {
        await downloadFile(asset.url, asset.name);
    }
    console.log('Download complete.');
}

main().catch(console.error);
