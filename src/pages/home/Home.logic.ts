
import { useState, useEffect } from 'react';
import holidayHeroImage from '../../assets/home/home_asset_35.jpg';
import iphoneHeroImage from '../../assets/home/iphone_hero_actual.jpg';
import airpodsProHeroImage from '../../assets/home/home_asset_31.jpg';
import ipadAirHeroImage from '../../assets/home/home_asset_38.jpg';
import watchSeriesTileImage from '../../assets/home/home_asset_24.jpg';
import ipadTileImage from '../../assets/home/home_asset_69.jpg';
import macbookAirTileImage from '../../assets/home/home_asset_45.jpg';
import appleGiftCardTileImage from '../../assets/home/home_asset_41.jpg';
import appleTradeInTileImage from '../../assets/home/home_asset_52.jpg';
import appleCardTileImage from '../../assets/home/home_asset_59.jpg';

export interface HomeCta {
  label: string;
  href: string;
}

export interface HomeHeroSection {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  primaryCta?: HomeCta;
  secondaryCta?: HomeCta;
}

export interface HomePromoTile {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  primaryCta?: HomeCta;
  secondaryCta?: HomeCta;
}

export interface HomeEntertainmentItem {
  id: string;
  image: string;
  ctaLabel: string;
  metaLine: string;
  href: string;
}

export interface HomeFilmItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
}
export const useHomeLogic = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroSections: HomeHeroSection[] = [
    {
      id: 'holiday',
      title: 'Wrapping up this special season.',
      subtitle: 'There’s still time to make their holiday one of a kind.',
      image: holidayHeroImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Shop gifts', href: 'https://www.apple.com/us/shop/goto/store' },
    },
    {
      id: 'iphone',
      title: 'iPhone',
      subtitle: 'Say hello to the latest generation of iPhone.',
      image: iphoneHeroImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/iphone/' },
      secondaryCta: { label: 'Shop iPhone', href: 'https://www.apple.com/us/shop/goto/buy_iphone' },
    },
    {
      id: 'airpods-pro-3',
      title: 'AirPods Pro 3',
      subtitle: 'The world’s best in-ear Active Noise Cancellation.',
      image: airpodsProHeroImage,
      bgColor: '#000',
      textColor: '#f5f5f7',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/airpods-pro/' },
      secondaryCta: { label: 'Buy', href: 'https://www.apple.com/us/shop/goto/buy_airpods/airpods_pro_3' },
    },
    {
      id: 'ipad-air',
      title: 'iPad Air',
      subtitle: 'Now supercharged by the M3 chip.',
      image: ipadAirHeroImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/ipad-air/' },
      secondaryCta: { label: 'Buy', href: 'https://www.apple.com/us/shop/goto/buy_ipad/ipad_air' },
    },
  ];

  const promoTiles: HomePromoTile[] = [
    {
      id: 'ipad-air-tile',
      title: 'iPad Air',
      subtitle: 'Now supercharged by the M3 chip.',
      image: ipadAirHeroImage,
      bgColor: '#f5f5f7',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/ipad-air/' },
      secondaryCta: { label: 'Buy', href: 'https://www.apple.com/us/shop/goto/buy_ipad/ipad_air' },
    },
    {
      id: 'watch-series-11',
      title: 'Apple Watch Series 11',
      subtitle: 'The ultimate way to watch your health.',
      image: watchSeriesTileImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/apple-watch-series-11/' },
      secondaryCta: { label: 'Buy', href: 'https://www.apple.com/us/shop/goto/buy_watch/apple_watch_series_11' },
    },
    {
      id: 'ipad',
      title: 'iPad',
      subtitle: 'Now with the speed of the A16 chip and double the starting storage.',
      image: ipadTileImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/ipad-11/' },
      secondaryCta: { label: 'Buy', href: 'https://www.apple.com/us/shop/goto/buy_ipad/ipad' },
    },
    {
      id: 'macbook-air',
      title: 'MacBook Air',
      subtitle: 'Sky blue color. Sky high performance with M4.',
      image: macbookAirTileImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/macbook-air/' },
      secondaryCta: { label: 'Buy', href: 'https://www.apple.com/us/shop/goto/buy_mac/macbook_air' },
    },
    {
      id: 'apple-gift-card',
      title: 'Apple Gift Card',
      subtitle: 'Let them spend the holidays however they like.',
      image: appleGiftCardTileImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/us/shop/goto/giftcards' },
      secondaryCta: { label: 'Buy', href: 'https://www.apple.com/us/shop/goto/buy_giftcard/giftcard' },
    },
    {
      id: 'apple-trade-in',
      title: 'Apple Trade In',
      subtitle: 'Get up to $180–$670 in credit when you trade in iPhone 13 or higher.',
      image: appleTradeInTileImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Get your estimate', href: 'https://www.apple.com/us/shop/goto/trade_in' },
    },
    {
      id: 'apple-card',
      title: 'Apple Card',
      subtitle: 'Get up to 3% Daily Cash back with every purchase.',
      image: appleCardTileImage,
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryCta: { label: 'Learn more', href: 'https://www.apple.com/apple-card/' },
      secondaryCta: {
        label: 'Apply now',
        href: 'https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036&start=false',
      },
    },
  ];

  const entertainmentItems: HomeEntertainmentItem[] = [
    {
      id: 'tv-last-frontier',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/4HIYvhgUWaSu9jDlrIvL8w/1250x668sr.jpg',
      ctaLabel: 'Stream now',
      metaLine: 'Action — 600,000 square miles. Nowhere to hide.',
      href: 'https://tv.apple.com/us/show/the-last-frontier/umc.cmc.6kmzwhcm9cj30piuuiymr4u7m?l=en-US',
    },
    {
      id: 'tv-f1',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/zLbkVwwHwe8I5EtuXc8wWg/1250x668sr.jpg',
      ctaLabel: 'Stream now',
      metaLine: 'Action — Now streaming on Apple TV+.',
      href: 'https://tv.apple.com/us/movie/f1-the-movie/umc.cmc.3t6dvnnr87zwd4wmvpdx5came?l=en-US',
    },
    {
      id: 'tv-family-plan-2',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/8rF8s5lmPuF1fmRHAMrzKQ/1250x668sr.jpg',
      ctaLabel: 'Stream now',
      metaLine: 'Comedy — Same family. New plan.',
      href: 'https://tv.apple.com/us/movie/the-family-plan-2/umc.cmc.1wj0ab94s7t1wy7sqv5dt6bfy?l=en-US',
    },
    {
      id: 'tv-slow-horses',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/plPQbHn4gzuGfTN4BEEX0Q/1250x668sr.jpg',
      ctaLabel: 'Stream now',
      metaLine: 'Thriller — Old sins cast new shadows.',
      href: 'https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o?l=en-US',
    },
    {
      id: 'tv-down-cemetery-road',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/1A5UrdlUF6-zEu5cfQvZag/1250x668sr.jpg',
      ctaLabel: 'Stream now',
      metaLine: 'Thriller — Curiosity kills.',
      href: 'https://tv.apple.com/us/show/down-cemetery-road/umc.cmc.3i55uxosnfpzw7rw1q525iksh?l=en-US',
    },
  ];

  const moreFromAppleItems: HomeFilmItem[] = [
    {
      id: 'design-for-every-student',
      title: 'Designed for Every Student',
      subtitle: 'Accessibility',
      image: 'https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-design-for-every-student/films_design_for_every_student_startframe__rokker562oa6_xlarge.jpg',
      href: 'https://www.apple.com/105/media/us/accessibility/2025/d3b1a14d-91ff-4745-b972-046660783b59/films/designed-for-students/accessibility-designed-for-students-tpl-us-2025_16x9.m3u8',
    },
    {
      id: 'a-critter-carol',
      title: 'A Critter Carol',
      subtitle: 'Shot on iPhone 17 Pro',
      image: 'https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-holiday/holiday_startframe__odo6zbq4yb6q_xlarge.jpg',
      href: 'https://www.apple.com/105/media/us/home/2025/6e153fbd-0945-4ac5-96ed-3cd15195434b/films/critter-carol/home-critter-carol-tpl-us-2025_16x9.m3u8',
    },
    {
      id: 'the-underdogs',
      title: 'The Underdogs: Blue Screen of Death',
      subtitle: 'Apple at Work',
      image: 'https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-underdogs/apple_at_work_underdogs_startframe__ev39ytszloya_xlarge.jpg',
      href: 'https://www.apple.com/105/media/us/business/2025/2facf38a-1c0b-4d49-9a68-f571d6eb5ab0/films/underdogs/business-underdogs-tpl-us-2025_16x9.m3u8',
    },
    {
      id: 'jackson-wang',
      title: 'Jackson Wang: Let Loose',
      subtitle: 'Shot on iPhone 17 Pro',
      image: 'https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-jackson-wang/jackson_wang_startframe__bybji4gnsinm_xlarge.jpg',
      href: 'https://www.apple.com/105/media/us/home/2025/0be9a056-b91a-427c-9e02-0fa4b3636ce1/films/let-loose/home-let-loose-tpl-us-2025_16x9.m3u8',
    },
    {
      id: 'dear-apple',
      title: 'Dear Apple',
      subtitle: 'Apple Watch',
      image: 'https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-dear-apple/apple_watch_dear_apple_startframe__cmo60b10ghaq_xlarge.jpg',
      href: 'https://www.apple.com/105/media/us/home/2025/0be9a056-b91a-427c-9e02-0fa4b3636ce1/films/dear-apple/home-dear-apple-tpl-us-2025_16x9.m3u8',
    },
    {
      id: 'no-frame-missed',
      title: 'No Frame Missed',
      subtitle: 'Accessibility',
      image: 'https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-no-frame-missed/accessibility_no_frame_missed_startframe__c4thkl20luuu_xlarge.jpg',
      href: 'https://www.apple.com/105/media/us/home/2025/0be9a056-b91a-427c-9e02-0fa4b3636ce1/films/no-frame-missed/home-no-frame-missed-tpl-us-2025_16x9.m3u8',
    },
  ];

  return {
    isLoaded,
    heroSections,
    promoTiles,
    entertainmentItems,
    moreFromAppleItems,
  };
};
