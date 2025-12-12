import { FooterContainer, FooterContent, FooterNote, FooterSections, FooterBottom, FooterLinks } from './GlobalFooter.styles';
import { FooterSection } from './components/FooterSection';
import { FooterLink } from './components/FooterLink';

export const GlobalFooter = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterNote>
          1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device.
        </FooterNote>
        <FooterSections>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FooterSection title="Shop and Learn">
              <li><FooterLink href="/store">Store</FooterLink></li>
              <li><FooterLink href="/mac">Mac</FooterLink></li>
              <li><FooterLink href="/ipad">iPad</FooterLink></li>
              <li><FooterLink href="/iphone">iPhone</FooterLink></li>
              <li><FooterLink href="/watch">Watch</FooterLink></li>
              <li><FooterLink href="/vision">Vision</FooterLink></li>
              <li><FooterLink href="/airpods">AirPods</FooterLink></li>
              <li><FooterLink href="/tv-home">TV & Home</FooterLink></li>
              <li><FooterLink href="/airtag">AirTag</FooterLink></li>
              <li><FooterLink href="/shop/accessories">Accessories</FooterLink></li>
              <li><FooterLink href="/shop/gift-cards">Gift Cards</FooterLink></li>
            </FooterSection>
            <FooterSection title="Apple Wallet">
              <li><FooterLink href="/wallet">Wallet</FooterLink></li>
              <li><FooterLink href="/apple-card">Apple Card</FooterLink></li>
              <li><FooterLink href="/apple-pay">Apple Pay</FooterLink></li>
              <li><FooterLink href="/apple-cash">Apple Cash</FooterLink></li>
            </FooterSection>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FooterSection title="Account">
              <li><FooterLink href="/account/manage">Manage Your Apple Account</FooterLink></li>
              <li><FooterLink href="/account/store">Apple Store Account</FooterLink></li>
              <li><FooterLink href="/icloud">iCloud.com</FooterLink></li>
            </FooterSection>
            <FooterSection title="Entertainment">
              <li><FooterLink href="/apple-one">Apple One</FooterLink></li>
              <li><FooterLink href="/apple-tv-plus">Apple TV+</FooterLink></li>
              <li><FooterLink href="/apple-music">Apple Music</FooterLink></li>
              <li><FooterLink href="/apple-arcade">Apple Arcade</FooterLink></li>
              <li><FooterLink href="/apple-fitness-plus">Apple Fitness+</FooterLink></li>
              <li><FooterLink href="/apple-news-plus">Apple News+</FooterLink></li>
              <li><FooterLink href="/apple-podcasts">Apple Podcasts</FooterLink></li>
              <li><FooterLink href="/apple-books">Apple Books</FooterLink></li>
              <li><FooterLink href="/app-store">App Store</FooterLink></li>
            </FooterSection>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FooterSection title="Apple Store">
              <li><FooterLink href="/retail/find-store">Find a Store</FooterLink></li>
              <li><FooterLink href="/retail/genius-bar">Genius Bar</FooterLink></li>
              <li><FooterLink href="/today">Today at Apple</FooterLink></li>
              <li><FooterLink href="/retail/group-reservations">Group Reservations</FooterLink></li>
              <li><FooterLink href="/today/camp">Apple Camp</FooterLink></li>
              <li><FooterLink href="/app-store-app">Apple Store App</FooterLink></li>
              <li><FooterLink href="/shop/refurbished">Certified Refurbished</FooterLink></li>
              <li><FooterLink href="/shop/trade-in">Apple Trade In</FooterLink></li>
              <li><FooterLink href="/shop/financing">Financing</FooterLink></li>
              <li><FooterLink href="/shop/carrier-deals">Carrier Deals at Apple</FooterLink></li>
              <li><FooterLink href="/shop/order-status">Order Status</FooterLink></li>
              <li><FooterLink href="/shop/help">Shopping Help</FooterLink></li>
            </FooterSection>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FooterSection title="For Business">
              <li><FooterLink href="/business">Apple and Business</FooterLink></li>
              <li><FooterLink href="/retail/business">Shop for Business</FooterLink></li>
            </FooterSection>
            <FooterSection title="For Education">
              <li><FooterLink href="/education">Apple and Education</FooterLink></li>
              <li><FooterLink href="/education/k12">Shop for K-12</FooterLink></li>
              <li><FooterLink href="/education/college">Shop for College</FooterLink></li>
            </FooterSection>
            <FooterSection title="For Healthcare">
              <li><FooterLink href="/healthcare">Apple in Healthcare</FooterLink></li>
              <li><FooterLink href="/healthcare/watch">Health on Apple Watch</FooterLink></li>
              <li><FooterLink href="/healthcare/records">Health Records on iPhone</FooterLink></li>
            </FooterSection>
            <FooterSection title="For Government">
              <li><FooterLink href="/shop/government">Shop for Government</FooterLink></li>
              <li><FooterLink href="/shop/veterans">Shop for Veterans and Military</FooterLink></li>
            </FooterSection>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FooterSection title="Apple Values">
              <li><FooterLink href="/accessibility">Accessibility</FooterLink></li>
              <li><FooterLink href="/values/education">Education</FooterLink></li>
              <li><FooterLink href="/environment">Environment</FooterLink></li>
              <li><FooterLink href="/diversity">Inclusion and Diversity</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy</FooterLink></li>
              <li><FooterLink href="/racial-equity">Racial Equity and Justice</FooterLink></li>
              <li><FooterLink href="/supplier-responsibility">Supplier Responsibility</FooterLink></li>
            </FooterSection>
            <FooterSection title="About Apple">
              <li><FooterLink href="/newsroom">Newsroom</FooterLink></li>
              <li><FooterLink href="/leadership">Apple Leadership</FooterLink></li>
              <li><FooterLink href="/careers">Career Opportunities</FooterLink></li>
              <li><FooterLink href="/investor">Investors</FooterLink></li>
              <li><FooterLink href="/compliance">Ethics and Compliance</FooterLink></li>
              <li><FooterLink href="/apple-events">Events</FooterLink></li>
              <li><FooterLink href="/contact">Contact Apple</FooterLink></li>
            </FooterSection>
          </div>
        </FooterSections>
        <FooterBottom>
          <div>Copyright © 2025 Apple Inc. All rights reserved.</div>
          <FooterLinks>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};
