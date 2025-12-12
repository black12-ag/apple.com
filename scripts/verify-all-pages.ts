import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface VerificationResult {
  passed: boolean;
  message: string;
}

const results: VerificationResult[] = [];

function checkPageStructure(pageName: string, pagePath: string): void {
  const fullPath = path.join(__dirname, '..', pagePath);
  
  const indexExists = fs.existsSync(path.join(fullPath, 'index.tsx'));
  results.push({
    passed: indexExists,
    message: `${pageName} index.tsx: ${indexExists ? '✅' : '❌'}`
  });

  const stylesPattern = new RegExp(`${pageName.replace(/\s/g, '')}.*\\.styles\\.ts`, 'i');
  const files = fs.existsSync(fullPath) ? fs.readdirSync(fullPath) : [];
  const hasStyles = files.some(f => stylesPattern.test(f) || f.endsWith('.styles.ts'));
  results.push({
    passed: hasStyles,
    message: `${pageName} styles: ${hasStyles ? '✅' : '❌'}`
  });

  const logicPattern = new RegExp(`${pageName.replace(/\s/g, '')}.*\\.logic\\.ts`, 'i');
  const hasLogic = files.some(f => logicPattern.test(f) || f.endsWith('.logic.ts'));
  results.push({
    passed: hasLogic,
    message: `${pageName} logic: ${hasLogic ? '✅' : '❌'}`
  });

  const componentsDir = path.join(fullPath, 'components');
  const hasComponents = fs.existsSync(componentsDir);
  results.push({
    passed: hasComponents,
    message: `${pageName} components folder: ${hasComponents ? '✅' : '❌'}`
  });
}

console.log('🍎 Apple Website Clone - Full Verification\n');

console.log('📁 Checking Page Structure (One Page, One Folder):');
const pages = [
  { name: 'Home', path: 'src/pages/home' },
  { name: 'Mac', path: 'src/pages/mac' },
  { name: 'iPad', path: 'src/pages/ipad' },
  { name: 'iPhone', path: 'src/pages/iphone' },
  { name: 'Watch', path: 'src/pages/watch' },
  { name: 'AirPods', path: 'src/pages/airpods' },
  { name: 'Vision', path: 'src/pages/vision' },
  { name: 'TVHome', path: 'src/pages/tv-home' },
];

pages.forEach(page => checkPageStructure(page.name, page.path));

console.log('\n🔘 Checking Navigation Buttons (Each in Own File):');
const navButtons = [
  'StoreButton', 'MacButton', 'iPadButton', 'iPhoneButton', 
  'WatchButton', 'VisionButton', 'AirPodsButton', 'TVHomeButton',
  'SearchButton', 'BagButton'
];

navButtons.forEach(button => {
  const buttonPath = path.join(__dirname, `../src/components/global-nav/components/${button}/index.tsx`);
  const exists = fs.existsSync(buttonPath);
  results.push({
    passed: exists,
    message: `${button}: ${exists ? '✅' : '❌'}`
  });
});

console.log('\n🖼️  Checking Downloaded Assets:');
const assetFolders = ['home', 'mac', 'ipad', 'iphone', 'watch', 'airpods', 'vision', 'tv-home'];
let totalAssets = 0;

assetFolders.forEach(folder => {
  const folderPath = path.join(__dirname, `../public/assets/${folder}`);
  if (fs.existsSync(folderPath)) {
    const count = fs.readdirSync(folderPath).length;
    totalAssets += count;
    results.push({
      passed: count > 0,
      message: `${folder} assets (${count}): ${count > 0 ? '✅' : '❌'}`
    });
  }
});

console.log('\n📊 Summary:');
results.forEach(r => console.log(r.message));

const totalTests = results.length;
const passedTests = results.filter(r => r.passed).length;

console.log(`\n✅ ${passedTests}/${totalTests} checks passed`);
console.log(`📦 Total assets downloaded: ${totalAssets}`);
console.log(`📄 Total pages: ${pages.length}`);
console.log(`🔘 Total nav buttons: ${navButtons.length}`);

if (passedTests === totalTests) {
  console.log('\n🎉 All verification checks passed!');
} else {
  console.log(`\n⚠️  ${totalTests - passedTests} checks failed`);
}
