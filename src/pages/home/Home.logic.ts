
import { useState, useEffect } from 'react';

export interface HeroSection {
  title: string;
  subtitle: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  primaryBtn?: { text: string; link: string };
  secondaryBtn?: { text: string; link: string };
  headingStyle?: 'light' | 'dark'; // Assuming component supports this
}

export const useHomeLogic = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroSections: HeroSection[] = [
    {
      title: 'iPhone 16 Pro',
      subtitle: 'Hello, Apple Intelligence.',
      image: '/assets/home/home_asset_7.jpg', // 2500x1336 Group 1
      bgColor: '#000',
      textColor: '#f5f5f7',
      primaryBtn: { text: 'Learn more', link: '/iphone' },
      secondaryBtn: { text: 'Buy', link: '/store/buy-iphone' },
    },
    {
      title: 'iPhone 16',
      subtitle: 'Hello, Apple Intelligence.',
      image: '/assets/home/home_asset_14.jpg', // 2500x1336 Group 2
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryBtn: { text: 'Learn more', link: '/iphone' },
      secondaryBtn: { text: 'Buy', link: '/store/buy-iphone' },
    },
    {
      title: 'iPad Air', // Educated guess based on scrape order and typical layout.
      subtitle: 'Two sizes. Faster chip. Does it all.',
      image: '/assets/home/home_asset_21.jpg', // 2500x1336 Group 3
      bgColor: '#fff',
      textColor: '#1d1d1f',
      primaryBtn: { text: 'Learn more', link: '/ipad' },
      secondaryBtn: { text: 'Buy', link: '/store/buy-ipad' },
    },
  ];

  const promoCards = [
    {
      title: 'Apple Watch Series 10',
      subtitle: 'Thinnest. Display. Ever.',
      image: '/assets/home/home_asset_24.jpg', // Group 4 Tile (688x368)
      bgColor: '#fff',
      textColor: '#1d1d1f',
      link: '/watch',
    },
    {
      title: 'MacBook Pro',
      subtitle: 'Built for Apple Intelligence.',
      image: '/assets/home/home_asset_31.jpg', // Group 5 Tile
      bgColor: '#fff',
      textColor: '#1d1d1f',
      link: '/mac',
    },
    {
      title: 'HomePod', // Guess
      subtitle: 'Profound sound.',
      image: '/assets/home/home_asset_38.jpg', // Group 6 Tile
      bgColor: '#fff',
      textColor: '#1d1d1f',
      link: '/tv-home',
    },
    {
      title: 'Apple Card',
      subtitle: 'Get up to 3% Daily Cash back.',
      image: '/assets/home/home_asset_45.jpg', // Group 7 Tile
      bgColor: '#fff',
      textColor: '#1d1d1f',
      link: '/wallet',
    },
    {
      title: 'Trade In',
      subtitle: 'Get credit toward a new iPhone.',
      image: '/assets/home/home_asset_52.jpg', // Group 8 Tile
      bgColor: '#fff',
      textColor: '#1d1d1f',
      link: '/shop/trade-in',
    },
    {
      title: 'Apple Intelligence',
      subtitle: 'AI for the rest of us.',
      image: '/assets/home/home_asset_59.jpg', // Group 9 Tile
      bgColor: '#fff',
      textColor: '#1d1d1f',
      link: '/apple-intelligence',
    }
  ];

  return {
    isLoaded,
    heroSections,
    promoCards,
  };
};
