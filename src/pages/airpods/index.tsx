import { AirPodsContainer, HeroSection, Title, Subtitle, HeroImage, HeroButtons, ProductGrid, ChapterNav, ChapterNavList, ChapterNavItem } from './AirPods.styles';
import { useAirPodsLogic } from './AirPods.logic';
import { AirPodsProductCard } from './components/AirPodsProductCard';

export const AirPodsPage = () => {
  const { products, chapterNavItems } = useAirPodsLogic();

  return (
    <AirPodsContainer>
      <ChapterNav>
        <ChapterNavList>
          {chapterNavItems.map((item, index) => (
            <ChapterNavItem key={index}>
              <a href={item.href}>{item.name}</a>
            </ChapterNavItem>
          ))}
        </ChapterNavList>
      </ChapterNav>
      
      <HeroSection>
        <Title>AirPods</Title>
        <Subtitle>Wireless. Effortless. Magical.</Subtitle>
        <HeroButtons>
          <a href="#">Learn more</a>
          <a href="/store">Shop AirPods</a>
        </HeroButtons>
        <HeroImage src="/assets/products/airpods-new.png" alt="AirPods" />
      </HeroSection>
      
      <ProductGrid>
        {products.map((product) => (
          <AirPodsProductCard
            key={product.id}
            name={product.name}
            tagline={product.tagline}
            price={product.price}
            image={product.image}
            isNew={product.isNew}
          />
        ))}
      </ProductGrid>
    </AirPodsContainer>
  );
};
