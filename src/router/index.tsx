import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { MacPage } from '../pages/mac';
import { IPadPage } from '../pages/ipad';
import { IPhonePage } from '../pages/iphone';
import { WatchPage } from '../pages/watch';
import { AirPodsPage } from '../pages/airpods';
import { Page as VisionPage } from '../pages/vision';
import { TVHomePage } from '../pages/tv-home';
import { StorePage } from '../pages/store';
import { GlobalNav } from '../components/global-nav';
import { GlobalFooter } from '../components/global-footer';
import { GlobalStyles } from '../styles/GlobalStyles';

// New Footer Page Imports
import { Page as AirtagPage } from '../pages/airtag';
import { Page as ShopAccessoriesPage } from '../pages/shop/accessories';
import { Page as ShopGiftCardsPage } from '../pages/shop/gift-cards';
import { Page as WalletPage } from '../pages/wallet';
import { Page as AppleCardPage } from '../pages/apple-card';
import { Page as ApplePayPage } from '../pages/apple-pay';
import { Page as AppleCashPage } from '../pages/apple-cash';
import { Page as AccountManagePage } from '../pages/account/manage';
import { Page as AccountStorePage } from '../pages/account/store';
import { Page as IcloudPage } from '../pages/icloud';
import { Page as AppleOnePage } from '../pages/apple-one';
import { Page as AppleTvPlusPage } from '../pages/apple-tv-plus';
import { Page as AppleMusicPage } from '../pages/apple-music';
import { Page as AppleArcadePage } from '../pages/apple-arcade';
import { Page as AppleFitnessPlusPage } from '../pages/apple-fitness-plus';
import { Page as AppleNewsPlusPage } from '../pages/apple-news-plus';
import { Page as ApplePodcastsPage } from '../pages/apple-podcasts';
import { Page as AppleBooksPage } from '../pages/apple-books';
import { Page as AppStorePage } from '../pages/app-store';
import { Page as RetailFindStorePage } from '../pages/retail/find-store';
import { Page as RetailGeniusBarPage } from '../pages/retail/genius-bar';
import { Page as TodayPage } from '../pages/today';
import { Page as RetailGroupReservationsPage } from '../pages/retail/group-reservations';
import { Page as TodayCampPage } from '../pages/today/camp';
import { Page as AppStoreAppPage } from '../pages/app-store-app';
import { Page as ShopRefurbishedPage } from '../pages/shop/refurbished';
import { Page as ShopTradeInPage } from '../pages/shop/trade-in';
import { Page as ShopFinancingPage } from '../pages/shop/financing';
import { Page as ShopCarrierDealsPage } from '../pages/shop/carrier-deals';
import { Page as ShopOrderStatusPage } from '../pages/shop/order-status';
import { Page as ShopHelpPage } from '../pages/shop/help';
import { Page as BusinessPage } from '../pages/business';
import { Page as RetailBusinessPage } from '../pages/retail/business';
import { Page as EducationPage } from '../pages/education';
import { Page as EducationK12Page } from '../pages/education/k12';
import { Page as EducationCollegePage } from '../pages/education/college';
import { Page as HealthcarePage } from '../pages/healthcare';
import { Page as HealthcareWatchPage } from '../pages/healthcare/watch';
import { Page as HealthcareRecordsPage } from '../pages/healthcare/records';
import { Page as ShopGovernmentPage } from '../pages/shop/government';
import { Page as ShopVeteransPage } from '../pages/shop/veterans';
import { Page as AccessibilityPage } from '../pages/accessibility';
import { Page as ValuesEducationPage } from '../pages/values/education';
import { Page as EnvironmentPage } from '../pages/environment';
import { Page as DiversityPage } from '../pages/diversity';
import { Page as PrivacyPage } from '../pages/privacy';
import { Page as RacialEquityPage } from '../pages/racial-equity';
import { Page as SupplierResponsibilityPage } from '../pages/supplier-responsibility';
import { Page as NewsroomPage } from '../pages/newsroom';
import { Page as LeadershipPage } from '../pages/leadership';
import { Page as CareersPage } from '../pages/careers';
import { Page as InvestorPage } from '../pages/investor';
import { Page as CompliancePage } from '../pages/compliance';
import { Page as AppleEventsPage } from '../pages/apple-events';
import { Page as ContactPage } from '../pages/contact';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <GlobalNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/ipad" element={<IPadPage />} />
        <Route path="/iphone" element={<IPhonePage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/airpods" element={<AirPodsPage />} />
        <Route path="/apple-vision-pro" element={<VisionPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/tv-home" element={<TVHomePage />} />

        <Route path="/airtag" element={<AirtagPage />} />
        <Route path="/shop/accessories" element={<ShopAccessoriesPage />} />
        <Route path="/shop/gift-cards" element={<ShopGiftCardsPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/apple-card" element={<AppleCardPage />} />
        <Route path="/apple-pay" element={<ApplePayPage />} />
        <Route path="/apple-cash" element={<AppleCashPage />} />
        <Route path="/account/manage" element={<AccountManagePage />} />
        <Route path="/account/store" element={<AccountStorePage />} />
        <Route path="/icloud" element={<IcloudPage />} />
        <Route path="/apple-one" element={<AppleOnePage />} />
        <Route path="/apple-tv-plus" element={<AppleTvPlusPage />} />
        <Route path="/apple-music" element={<AppleMusicPage />} />
        <Route path="/apple-arcade" element={<AppleArcadePage />} />
        <Route path="/apple-fitness-plus" element={<AppleFitnessPlusPage />} />
        <Route path="/apple-news-plus" element={<AppleNewsPlusPage />} />
        <Route path="/apple-podcasts" element={<ApplePodcastsPage />} />
        <Route path="/apple-books" element={<AppleBooksPage />} />
        <Route path="/app-store" element={<AppStorePage />} />
        <Route path="/retail/find-store" element={<RetailFindStorePage />} />
        <Route path="/retail/genius-bar" element={<RetailGeniusBarPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/retail/group-reservations" element={<RetailGroupReservationsPage />} />
        <Route path="/today/camp" element={<TodayCampPage />} />
        <Route path="/app-store-app" element={<AppStoreAppPage />} />
        <Route path="/shop/refurbished" element={<ShopRefurbishedPage />} />
        <Route path="/shop/trade-in" element={<ShopTradeInPage />} />
        <Route path="/shop/financing" element={<ShopFinancingPage />} />
        <Route path="/shop/carrier-deals" element={<ShopCarrierDealsPage />} />
        <Route path="/shop/order-status" element={<ShopOrderStatusPage />} />
        <Route path="/shop/help" element={<ShopHelpPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/retail/business" element={<RetailBusinessPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/education/k12" element={<EducationK12Page />} />
        <Route path="/education/college" element={<EducationCollegePage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/healthcare/watch" element={<HealthcareWatchPage />} />
        <Route path="/healthcare/records" element={<HealthcareRecordsPage />} />
        <Route path="/shop/government" element={<ShopGovernmentPage />} />
        <Route path="/shop/veterans" element={<ShopVeteransPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/values/education" element={<ValuesEducationPage />} />
        <Route path="/environment" element={<EnvironmentPage />} />
        <Route path="/diversity" element={<DiversityPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/racial-equity" element={<RacialEquityPage />} />
        <Route path="/supplier-responsibility" element={<SupplierResponsibilityPage />} />
        <Route path="/newsroom" element={<NewsroomPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/investor" element={<InvestorPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/apple-events" element={<AppleEventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <GlobalFooter />
    </BrowserRouter>
  );
};
