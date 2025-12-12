export const useAirPodsLogic = () => {
  const products = [
    {
      id: 'airpods-pro-3',
      name: 'AirPods Pro 3',
      tagline: "The world's best in-ear Active Noise Cancellation.",
      price: 'From $249',
      image: '/assets/products/airpods-pro.jpg',
      isNew: true,
    },
    {
      id: 'airpods-4',
      name: 'AirPods 4',
      tagline: 'Iconic. Now icons.',
      price: 'From $129',
      image: '/assets/products/airpods-new.png',
      isNew: false,
    },
    {
      id: 'airpods-max',
      name: 'AirPods Max',
      tagline: 'The ultimate over-ear experience.',
      price: 'From $549',
      image: '/assets/products/airpods-new.png',
      isNew: false,
    },
  ];

  const chapterNavItems = [
    { name: 'AirPods Pro 3', href: '/airpods-pro' },
    { name: 'AirPods 4', href: '/airpods-4' },
    { name: 'AirPods Max', href: '/airpods-max' },
    { name: 'Compare', href: '/airpods/compare' },
    { name: 'Shop AirPods', href: '/shop/airpods' },
  ];

  return { products, chapterNavItems };
};
