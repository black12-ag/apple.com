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
      id: 'iphone-17-pro',
      name: 'iPhone 17 Pro',
      tagline: 'The ultimate iPhone.',
      price: 'From $999',
      image: '/assets/products/iphone-hero-new.png',
      link: '/iphone',
      isNew: true,
    },
    {
      id: 'macbook-air',
      name: 'MacBook Air',
      tagline: 'Lean. Mean. M3 machine.',
      price: 'From $1099',
      image: '/assets/products/macbook-air.jpg',
      link: '/mac',
    },
    {
      id: 'ipad-air',
      name: 'iPad Air',
      tagline: 'Supercharged by M3.',
      price: 'From $599',
      image: '/assets/products/ipad-air-new.png',
      link: '/ipad',
      isNew: true,
    },
    {
      id: 'apple-watch',
      name: 'Apple Watch Series 11',
      tagline: 'Smarter. Brighter. Mightier.',
      price: 'From $399',
      image: '/assets/products/watch-new.png',
      link: '/watch',
      isNew: true,
    },
    {
      id: 'airpods-pro',
      name: 'AirPods Pro 3',
      tagline: 'Adaptive Audio. Now playing.',
      price: '$249',
      image: '/assets/products/airpods-pro.jpg',
      link: '/airpods',
      isNew: true,
    },
    {
      id: 'vision-pro',
      name: 'Apple Vision Pro',
      tagline: 'Welcome to spatial computing.',
      price: 'From $3499',
      image: '/assets/products/vision-pro.png',
      link: '/apple-vision-pro',
    },
  ];

  const accessories: StoreProduct[] = [
    {
      id: 'magsafe-charger',
      name: 'MagSafe Charger',
      tagline: 'Effortless charging.',
      price: '$39',
      image: '/assets/products/macbook-air.jpg',
      link: '/store',
    },
    {
      id: 'apple-pencil',
      name: 'Apple Pencil Pro',
      tagline: 'Pixel-perfect precision.',
      price: '$129',
      image: '/assets/products/ipad-air-new.png',
      link: '/store',
    },
  ];

  return {
    featuredProducts,
    accessories,
  };
};
