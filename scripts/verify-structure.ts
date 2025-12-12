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

function checkFileExists(filepath: string, description: string): boolean {
  const fullPath = path.join(__dirname, '..', filepath);
  const exists = fs.existsSync(fullPath);
  results.push({
    passed: exists,
    message: `${description}: ${exists ? '✅ PASS' : '❌ FAIL'}`
  });
  return exists;
}

function checkMaxLines(filepath: string, maxLines: number): boolean {
  const fullPath = path.join(__dirname, '..', filepath);
  if (!fs.existsSync(fullPath)) return false;
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  const lineCount = content.split('\n').length;
  const passed = lineCount <= maxLines;
  
  results.push({
    passed,
    message: `${filepath} line count (${lineCount}/${maxLines}): ${passed ? '✅ PASS' : '❌ FAIL'}`
  });
  
  return passed;
}

console.log('🔍 Verifying Apple Website Clone Structure\n');

console.log('📁 Checking One Page, One Folder Structure:');
checkFileExists('src/pages/home/index.tsx', 'Home page index');
checkFileExists('src/pages/home/Home.logic.ts', 'Home page logic');
checkFileExists('src/pages/home/Home.styles.ts', 'Home page styles');

console.log('\n🔘 Checking Navigation Buttons (Each in Own File):');
const navButtons = [
  'StoreButton', 'MacButton', 'iPadButton', 'iPhoneButton', 
  'WatchButton', 'VisionButton', 'AirPodsButton', 'TVHomeButton',
  'EntertainmentButton', 'AccessoriesButton', 'SupportButton',
  'SearchButton', 'BagButton'
];

navButtons.forEach(button => {
  checkFileExists(`src/components/global-nav/components/${button}/index.tsx`, button);
});

console.log('\n📄 Checking Max Line Count (400 lines):');
const filesToCheck = [
  'src/App.tsx',
  'src/pages/home/index.tsx',
  'src/pages/home/Home.logic.ts',
  'src/pages/home/Home.styles.ts',
  'src/components/global-nav/index.tsx',
  'src/components/global-nav/GlobalNav.styles.ts',
  'src/components/global-footer/index.tsx',
  'src/pages/home/components/HeroSection/index.tsx',
  'src/pages/home/components/PromoGrid/index.tsx'
];

filesToCheck.forEach(file => checkMaxLines(file, 400));

console.log('\n🖼️  Checking Downloaded Assets:');
const assetsDir = path.join(__dirname, '../public/assets/images');
if (fs.existsSync(assetsDir)) {
  const imageCount = fs.readdirSync(assetsDir).length;
  const passed = imageCount > 0;
  results.push({
    passed,
    message: `Downloaded images (${imageCount}): ${passed ? '✅ PASS' : '❌ FAIL'}`
  });
} else {
  results.push({
    passed: false,
    message: 'Assets directory: ❌ FAIL'
  });
}

console.log('\n📊 Summary:');
results.forEach(r => console.log(r.message));

const totalTests = results.length;
const passedTests = results.filter(r => r.passed).length;
const failedTests = totalTests - passedTests;

console.log(`\n${passedTests}/${totalTests} tests passed`);

if (failedTests === 0) {
  console.log('\n✅ All verification checks passed!');
  process.exit(0);
} else {
  console.log(`\n❌ ${failedTests} verification checks failed!`);
  process.exit(1);
}
