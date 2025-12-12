export const useIPhoneLogic = () => {
  const products = [
    {
      id: 'iphone-17-pro',
      name: 'iPhone 17 Pro',
      tagline: 'The ultimate iPhone.',
      price: 'From $999',
      image: '/assets/products/iphone-hero-new.png',
      isNew: true,
    },
    {
      id: 'iphone-air',
      name: 'iPhone Air',
      tagline: 'Impossibly thin. Incredibly capable.',
      price: 'From $1199',
      image: '/assets/products/iphone-hero-new.png',
      isNew: true,
    },
    {
      id: 'iphone-17',
      name: 'iPhone 17',
      tagline: 'A total powerhouse.',
      price: 'From $799',
      image: '/assets/products/iphone-hero-new.png',
      isNew: true,
    },
    {
      id: 'iphone-16e',
      name: 'iPhone 16e',
      tagline: 'A great new iPhone at an even greater price.',
      price: 'From $599',
      image: '/assets/products/iphone-hero-new.png',
      isNew: false,
    },
  ];

  const chapterNavItems = [
    { name: 'iPhone 17 Pro', href: '/iphone-17-pro' },
    { name: 'iPhone Air', href: '/iphone-air' },
    { name: 'iPhone 17', href: '/iphone-17' },
    { name: 'iPhone 16e', href: '/iphone-16e' },
    { name: 'Compare', href: '/iphone/compare' },
    { name: 'Switch to iPhone', href: '/iphone/switch' },
    { name: 'Shop iPhone', href: '/shop/iphone' },
  ];

  return { products, chapterNavItems };
};
