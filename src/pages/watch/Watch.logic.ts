export const useWatchLogic = () => {
  const products = [
    {
      id: 'watch-series-11',
      name: 'Apple Watch Series 11',
      tagline: 'The ultimate way to watch your health.',
      price: 'From $399',
      image: '/assets/products/watch-new.png',
      isNew: true,
    },
    {
      id: 'watch-ultra-3',
      name: 'Apple Watch Ultra 3',
      tagline: 'The most rugged and capable Apple Watch.',
      price: 'From $799',
      image: '/assets/products/watch-new.png',
      isNew: true,
    },
    {
      id: 'watch-se-3',
      name: 'Apple Watch SE 3',
      tagline: 'All the essentials. Light on price.',
      price: 'From $249',
      image: '/assets/products/watch-new.png',
      isNew: true,
    },
  ];

  const chapterNavItems = [
    { name: 'Series 11', href: '/apple-watch-series-11' },
    { name: 'Ultra 3', href: '/apple-watch-ultra-3' },
    { name: 'SE 3', href: '/apple-watch-se-3' },
    { name: 'Compare', href: '/watch/compare' },
    { name: 'Why Apple Watch', href: '/watch/why-apple-watch' },
    { name: 'Bands', href: '/shop/watch/bands' },
    { name: 'Shop Watch', href: '/shop/watch' },
  ];

  return { products, chapterNavItems };
};
