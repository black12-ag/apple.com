export const useVisionLogic = () => {
  const features = [
    {
      id: 'apps',
      title: 'Apps',
      description: 'Explore a new dimension of apps that transform your space.',
      image: '/assets/products/vision-pro.png',
    },
    {
      id: 'entertainment',
      title: 'Entertainment',
      description: 'Watch movies and TV shows on a massive screen.',
      image: '/assets/products/vision-pro.png',
    },
    {
      id: 'photos',
      title: 'Photos & Videos',
      description: 'Relive your memories in stunning 3D.',
      image: '/assets/products/vision-pro.png',
    },
    {
      id: 'connection',
      title: 'Connection',
      description: 'FaceTime with life-size participants.',
      image: '/assets/products/vision-pro.png',
    },
  ];

  const chapterNavItems = [
    { name: 'Overview', href: '/apple-vision-pro' },
    { name: 'Tech Specs', href: '/apple-vision-pro/specs' },
    { name: 'Shop Vision Pro', href: '/shop/vision' },
  ];

  return { features, chapterNavItems };
};
