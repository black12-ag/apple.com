import {
  StoreContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  GiftSection,
  GiftTitle,
  GiftSubtitle,
  ProductsSection,
  SectionTitle,
  ProductGrid,
} from './Store.styles';
import { useStoreLogic } from './Store.logic';
import { StoreProductCard } from './components/StoreProductCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShopGiftsButton = styled(Link)`
  background-color: #0071e3;
  color: #fff;
  padding: 12px 24px;
  border-radius: 980px;
  font-size: 17px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0077ed;
  }
`;

export const StorePage = () => {
  const { featuredProducts, accessories } = useStoreLogic();

  return (
    <StoreContainer>
      <HeroSection>
        <HeroTitle>Store</HeroTitle>
        <HeroSubtitle>The best way to buy the products you love.</HeroSubtitle>
      </HeroSection>

      <GiftSection>
        <GiftTitle>Give something special.</GiftTitle>
        <GiftSubtitle>Find what they've been waiting for all year.</GiftSubtitle>
        <ShopGiftsButton to="/store">Shop gifts</ShopGiftsButton>
      </GiftSection>

      <ProductsSection>
        <SectionTitle>The latest. Take a look at what's new, right now.</SectionTitle>
        <ProductGrid>
          {featuredProducts.map((product) => (
            <StoreProductCard
              key={product.id}
              name={product.name}
              tagline={product.tagline}
              price={product.price}
              image={product.image}
              link={product.link}
              isNew={product.isNew}
            />
          ))}
        </ProductGrid>
      </ProductsSection>

      <ProductsSection>
        <SectionTitle>Accessories. Essentials that pair perfectly with your favorite devices.</SectionTitle>
        <ProductGrid>
          {accessories.map((product) => (
            <StoreProductCard
              key={product.id}
              name={product.name}
              tagline={product.tagline}
              price={product.price}
              image={product.image}
              link={product.link}
            />
          ))}
        </ProductGrid>
      </ProductsSection>
    </StoreContainer>
  );
};
