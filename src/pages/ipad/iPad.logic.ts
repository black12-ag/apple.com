export const useIPadLogic = () => {
  const products = [
    {
      id: 'ipad-pro',
      name: 'iPad Pro',
      chip: 'M4 chip',
      tagline: 'The ultimate iPad experience with the most advanced technology.',
      price: 'From $999',
      image: '/assets/products/ipad-air-new.png',
      isNew: false,
    },
    {
      id: 'ipad-air',
      name: 'iPad Air',
      chip: 'M3 chip',
      tagline: 'Serious performance in a colorful, portable design.',
      price: 'From $599',
      image: '/assets/products/ipad-air-new.png',
      isNew: true,
    },
    {
      id: 'ipad',
      name: 'iPad',
      chip: 'A16 chip',
      tagline: 'The colorful, all-screen iPad for the things you do every day.',
      price: 'From $349',
      image: '/assets/products/ipad-air-new.png',
      isNew: false,
    },
    {
      id: 'ipad-mini',
      name: 'iPad mini',
      chip: 'A17 Pro chip',
      tagline: 'The full iPad experience in an ultraportable design.',
      price: 'From $499',
      image: '/assets/products/ipad-air-new.png',
      isNew: false,
    },
  ];

  const chapterNavItems = [
    { name: 'iPad Pro', href: '/ipad-pro' },
    { name: 'iPad Air', href: '/ipad-air' },
    { name: 'iPad', href: '/ipad' },
    { name: 'iPad mini', href: '/ipad-mini' },
    { name: 'Compare', href: '/ipad/compare' },
    { name: 'Apple Pencil', href: '/apple-pencil' },
    { name: 'Keyboards', href: '/ipad-keyboards' },
    { name: 'Shop iPad', href: '/shop/ipad' },
  ];

  return { products, chapterNavItems };
};
