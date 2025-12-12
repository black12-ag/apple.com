
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
    // Shop
    { label: 'Vision', slug: 'vision' },
    { label: 'AirTag', slug: 'airtag' },
    { label: 'Accessories', slug: 'shop/accessories' },
    { label: 'Gift Cards', slug: 'shop/gift-cards' },

    // Wallet
    { label: 'Wallet', slug: 'wallet' },
    { label: 'Apple Card', slug: 'apple-card' },
    { label: 'Apple Pay', slug: 'apple-pay' },
    { label: 'Apple Cash', slug: 'apple-cash' },

    // Account
    { label: 'Manage Your Apple Account', slug: 'account/manage' },
    { label: 'Apple Store Account', slug: 'account/store' },
    { label: 'iCloud.com', slug: 'icloud' }, // Might want to be external? User said 'page for them'. sticking to internal.

    // Entertainment
    { label: 'Apple One', slug: 'apple-one' },
    { label: 'Apple TV+', slug: 'apple-tv-plus' },
    { label: 'Apple Music', slug: 'apple-music' },
    { label: 'Apple Arcade', slug: 'apple-arcade' },
    { label: 'Apple Fitness+', slug: 'apple-fitness-plus' },
    { label: 'Apple News+', slug: 'apple-news-plus' },
    { label: 'Apple Podcasts', slug: 'apple-podcasts' },
    { label: 'Apple Books', slug: 'apple-books' },
    { label: 'App Store', slug: 'app-store' },

    // Store
    { label: 'Find a Store', slug: 'retail/find-store' },
    { label: 'Genius Bar', slug: 'retail/genius-bar' },
    { label: 'Today at Apple', slug: 'today' },
    { label: 'Group Reservations', slug: 'retail/group-reservations' },
    { label: 'Apple Camp', slug: 'today/camp' },
    { label: 'Apple Store App', slug: 'app-store-app' },
    { label: 'Certified Refurbished', slug: 'shop/refurbished' },
    { label: 'Apple Trade In', slug: 'shop/trade-in' },
    { label: 'Financing', slug: 'shop/financing' },
    { label: 'Carrier Deals at Apple', slug: 'shop/carrier-deals' },
    { label: 'Order Status', slug: 'shop/order-status' },
    { label: 'Shopping Help', slug: 'shop/help' },

    // Business
    { label: 'Apple and Business', slug: 'business' },
    { label: 'Shop for Business', slug: 'retail/business' },

    // Education
    { label: 'Apple and Education', slug: 'education' },
    { label: 'Shop for K-12', slug: 'education/k12' },
    { label: 'Shop for College', slug: 'education/college' },

    // Healthcare
    { label: 'Apple in Healthcare', slug: 'healthcare' },
    { label: 'Health on Apple Watch', slug: 'healthcare/watch' },
    { label: 'Health Records on iPhone', slug: 'healthcare/records' },

    // Government
    { label: 'Shop for Government', slug: 'shop/government' },
    { label: 'Shop for Veterans and Military', slug: 'shop/veterans' },

    // Values
    { label: 'Accessibility', slug: 'accessibility' },
    { label: 'Education Values', slug: 'values/education' },
    { label: 'Environment', slug: 'environment' },
    { label: 'Inclusion and Diversity', slug: 'diversity' },
    { label: 'Privacy', slug: 'privacy' },
    { label: 'Racial Equity and Justice', slug: 'racial-equity' },
    { label: 'Supplier Responsibility', slug: 'supplier-responsibility' },

    // About
    { label: 'Newsroom', slug: 'newsroom' },
    { label: 'Apple Leadership', slug: 'leadership' },
    { label: 'Career Opportunities', slug: 'careers' },
    { label: 'Investors', slug: 'investor' },
    { label: 'Ethics and Compliance', slug: 'compliance' },
    { label: 'Events', slug: 'apple-events' },
    { label: 'Contact Apple', slug: 'contact' },
];

const getTemplate = (title: string, relativePathToComponents: string) => `import styled from 'styled-components';
import { ProductPageLayout } from '${relativePathToComponents}/ProductPageLayout';

const Container = styled.div\`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f7;
\`;

const Title = styled.h1\`
  font-size: 48px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 20px;
\`;

const Description = styled.p\`
  font-size: 21px;
  color: #86868b;
  max-width: 600px;
  text-align: center;
\`;

export const Page = () => {
  return (
    <ProductPageLayout>
      <Container>
        <Title>${title}</Title>
        <Description>
          This is a placeholder for the verified ${title} page. 
          Content would typically be fetched or implemented here.
        </Description>
      </Container>
    </ProductPageLayout>
  );
};
`;

const rootDir = path.resolve(process.cwd(), 'src/pages');
const componentsDir = path.resolve(process.cwd(), 'src/components');

console.log('--- ROUTER IMPORTS ---');
pages.forEach(page => {
    // Generate component name from slug
    const componentName = page.slug.split(/[\/-]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Page';
    // Import path
    console.log(`import { Page as ${componentName} } from '../pages/${page.slug}';`);
});

console.log('\n--- ROUTER ROUTES ---');
pages.forEach(page => {
    const componentName = page.slug.split(/[\/-]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Page';
    console.log(`<Route path="/${page.slug}" element={<${componentName} />} />`);
});

console.log('\n--- CREATING FILES ---');
pages.forEach(page => {
    const pagePath = path.join(rootDir, page.slug);

    if (!fs.existsSync(pagePath)) {
        fs.mkdirSync(pagePath, { recursive: true });
    }

    const filePath = path.join(pagePath, 'index.tsx');
    const relativeToComponents = path.relative(pagePath, componentsDir);

    // Check if exists? Overwrite as per user 'add for all'.
    fs.writeFileSync(filePath, getTemplate(page.label, relativeToComponents));
    // console.log(`Created ${filePath}`);
});

console.log('Done.');
