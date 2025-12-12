import styled from 'styled-components';

export const StoreContainer = styled.div`
  background-color: #f5f5f7;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  background-color: #fbfbfd;
  text-align: center;
  padding: 80px 20px 40px;
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 8px;
`;

export const HeroSubtitle = styled.p`
  font-size: 24px;
  color: #6e6e73;
  margin-bottom: 24px;
`;

export const GiftSection = styled.section`
  background: linear-gradient(180deg, #7dd3fc 0%, #fbbf24 100%);
  text-align: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GiftLogo = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
`;

export const GiftTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 8px;
`;

export const GiftSubtitle = styled.p`
  font-size: 21px;
  color: #1d1d1f;
  margin-bottom: 24px;
`;

export const ProductsSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 24px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;
