import { TVHomeContainer, HeroSection, Title, Subtitle, ProductGrid, ChapterNav, ChapterNavList, ChapterNavItem } from './TVHome.styles';
import { useTVHomeLogic } from './TVHome.logic';
import { TVHomeProductCard } from './components/TVHomeProductCard';

export const TVHomePage = () => {
  const { products, chapterNavItems } = useTVHomeLogic();

  return (
    <TVHomeContainer>
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
        <Title>TV & Home</Title>
        <Subtitle>Icons of icons.</Subtitle>
      </HeroSection>
      
      <ProductGrid>
        {products.map((product) => (
          <TVHomeProductCard
            key={product.id}
            name={product.name}
            tagline={product.tagline}
            price={product.price}
          />
        ))}
      </ProductGrid>
    </TVHomeContainer>
  );
};
