export const useMacLogic = () => {
  const products = [
    {
      id: 'macbook-air',
      name: 'MacBook Air',
      chip: 'M4 chip',
      tagline: 'Strikingly thin and fast so you can work, play, or create anywhere.',
      price: 'From $999',
      image: '/assets/products/macbook-air.jpg',
      colors: ['sky blue', 'silver', 'starlight', 'midnight'],
      isNew: false,
    },
    {
      id: 'macbook-pro',
      name: 'MacBook Pro',
      chip: 'M5, M4 Pro, or M4 Max chip',
      tagline: 'The most advanced Mac laptops for demanding workflows.',
      price: 'From $1599',
      image: '/assets/products/macbook-air.jpg',
      colors: ['space black', 'silver'],
      isNew: true,
    },
    {
      id: 'imac',
      name: 'iMac',
      chip: 'M4 chip',
      tagline: 'A stunning all-in-one desktop for creativity and productivity.',
      price: 'From $1299',
      image: '/assets/products/macbook-air.jpg',
      colors: ['blue', 'purple', 'pink', 'orange', 'yellow', 'green', 'silver'],
      isNew: false,
    },
    {
      id: 'mac-mini',
      name: 'Mac mini',
      chip: 'M4 or M4 Pro chip',
      tagline: 'The mini-est, most affordable Mac with mighty performance.',
      price: 'From $599',
      image: '/assets/products/macbook-air.jpg',
      colors: [],
      isNew: false,
    },
    {
      id: 'mac-studio',
      name: 'Mac Studio',
      chip: 'M4 Max or M3 Ultra chip',
      tagline: 'Powerful performance and extensive connectivity for pro workflows.',
      price: 'From $1999',
      image: '/assets/products/macbook-air.jpg',
      colors: [],
      isNew: false,
    },
    {
      id: 'mac-pro',
      name: 'Mac Pro',
      chip: 'M2 Ultra chip',
      tagline: 'A pro workstation with PCIe expansion for demanding workflows.',
      price: 'From $6999',
      image: '/assets/products/macbook-air.jpg',
      colors: [],
      isNew: false,
    },
  ];

  const chapterNavItems = [
    { name: 'MacBook Air', href: '/macbook-air' },
    { name: 'MacBook Pro', href: '/macbook-pro' },
    { name: 'iMac', href: '/imac' },
    { name: 'Mac mini', href: '/mac-mini' },
    { name: 'Mac Studio', href: '/mac-studio' },
    { name: 'Mac Pro', href: '/mac-pro' },
    { name: 'Compare', href: '/mac/compare' },
    { name: 'Displays', href: '/displays' },
    { name: 'Shop Mac', href: '/shop/mac' },
  ];

  return { products, chapterNavItems };
};
