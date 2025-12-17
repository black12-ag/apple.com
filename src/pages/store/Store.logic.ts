export interface StoreProduct {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  link: string;
  isNew?: boolean;
}

export const useStoreLogic = () => {
  const featuredProducts: StoreProduct[] = [
    {
      id: 'iphone-16-pro',
      name: 'iPhone 16 Pro',
      tagline: 'Hello, Apple Intelligence.',
      price: 'From $999 or $41.62/mo. for 24 mo.',
      image: '/assets/home/home_asset_7.jpg',
      link: '/iphone',
      isNew: true,
    },
    {
      id: 'apple-watch-s10',
      name: 'Apple Watch Series 10',
      tagline: 'Thinnest. Display. Ever.',
      price: 'From $399 or $33.25/mo. for 12 mo.',
      image: '/assets/home/home_asset_24.jpg',
      link: '/watch',
      isNew: true,
    },
    {
      id: 'macbook-pro',
      name: 'MacBook Pro',
      tagline: 'Built for Apple Intelligence.',
      price: 'From $1599 or $133.25/mo. for 12 mo.',
      image: '/assets/home/home_asset_45.jpg',
      link: '/mac',
      isNew: true,
    },
    {
      id: 'ipad-air',
      name: 'iPad Air',
      tagline: 'Two sizes. Faster chip. Does it all.',
      price: 'From $599 or $49.91/mo. for 12 mo.',
      image: '/assets/home/home_asset_38.jpg',
      link: '/ipad',
      isNew: true,
    },
    {
      id: 'airpods-4',
      name: 'AirPods 4',
      tagline: 'Iconic sound. Supercharged.',
      price: '$179',
      image: '/assets/home/home_asset_31.jpg',
      link: '/airpods',
      isNew: true,
    },
    {
      id: 'apple-vision-pro',
      name: 'Apple Vision Pro',
      tagline: 'The era of spatial computing is here.',
      price: 'From $3499 or $291.58/mo. for 12 mo.',
      image: '/assets/home/home_asset_14.jpg', // Placeholder
      link: '/vision',
    },
  ];

  const accessories: StoreProduct[] = [
    {
      id: 'magsafe-charger',
      name: 'MagSafe Charger',
      tagline: 'Effortless charging.',
      price: '$39',
      image: '/assets/home/home_asset_59.jpg', // Placeholder
      link: '/store',
    },
    {
      id: 'apple-pencil-pro',
      name: 'Apple Pencil Pro',
      tagline: 'Pixel-perfect precision.',
      price: '$129',
      image: '/assets/home/home_asset_52.jpg', // Placeholder
      link: '/ipad',
    },
    {
      id: 'studio-display',
      name: 'Studio Display',
      tagline: 'A sight to be seen.',
      price: '$1599',
      image: '/assets/home/home_asset_6.jpg',
      link: '/mac',
    }
  ];

  return {
    featuredProducts,
    accessories,
  };
};
