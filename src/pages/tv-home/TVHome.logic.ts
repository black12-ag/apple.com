export const useTVHomeLogic = () => {
  const products = [
    {
      id: 'apple-tv-4k',
      name: 'Apple TV 4K',
      tagline: 'The icons of icons.',
      price: 'From $129',
      isNew: false,
    },
    {
      id: 'homepod',
      name: 'HomePod',
      tagline: 'Profound sound.',
      price: 'From $299',
      isNew: false,
    },
    {
      id: 'homepod-mini',
      name: 'HomePod mini',
      tagline: 'Impressive sound. Icons of icons.',
      price: 'From $99',
      isNew: false,
    },
  ];

  const chapterNavItems = [
    { name: 'Apple TV 4K', href: '/apple-tv-4k' },
    { name: 'HomePod', href: '/homepod' },
    { name: 'HomePod mini', href: '/homepod-mini' },
    { name: 'Shop TV & Home', href: '/shop/tv-home' },
  ];

  return { products, chapterNavItems };
};
