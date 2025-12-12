import { IPadContainer } from './iPad.styles';
import { ProductPageLayout } from '../../components/ProductPageLayout';
import { FadeInSection } from '../../components/Animations';
import styled from 'styled-components';

const HeroSection = styled.div`
  background: #f5f5f7;
  color: #1d1d1f;
  padding: 100px 0 60px;
  text-align: center;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 72px;
  line-height: 1.05;
  font-weight: 600;
  margin-bottom: 0px;
`;

const HeroSubtitle = styled.p`
  font-size: 28px;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 20px;
`;

const HeroImage = styled.img`
  max-width: 1400px;
  width: 90%;
  height: auto;
  margin-top: 20px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

const FeatureCard = styled.div<{ $dark?: boolean }>`
  background: ${props => props.$dark ? '#000' : '#fff'};
  color: ${props => props.$dark ? '#f5f5f7' : '#1d1d1f'};
  border-radius: 30px;
  padding: 40px;
  overflow: hidden;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
`;

const CardTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 12px;
`;

const CardText = styled.p`
  font-size: 20px;
  max-width: 80%;
`;

const CardImage = styled.img`
  margin-top: auto;
  max-width: 90%;
  height: auto;
`;

export const IPadPage = () => {
  const links = [
    { label: 'Explore All iPad', url: '#' },
    { label: 'iPad Pro', url: '#' },
    { label: 'iPad Air', url: '#' },
    { label: 'iPad', url: '#' },
    { label: 'iPad mini', url: '#' },
    { label: 'Apple Pencil', url: '#' },
    { label: 'Shop iPad', url: '#', isCta: true },
  ];

  return (
    <ProductPageLayout productTitle="iPad" links={links}>
      <IPadContainer>
        <FadeInSection>
          <HeroSection>
            <HeroTitle>iPad Pro</HeroTitle>
            <HeroSubtitle>Unbelievably thin. Incredibly powerful.</HeroSubtitle>
            <HeroImage src="/assets/images/1376x736sr.jpg" alt="iPad Pro" />
          </HeroSection>
        </FadeInSection>

        <FeaturesGrid>
          <FadeInSection>
            <FeatureCard>
              <CardTitle>iPad Air</CardTitle>
              <CardText>Two sizes. Faster chip. Does it all.</CardText>
              <CardImage src="/assets/images/548x992nr.jpg" />
            </FeatureCard>
          </FadeInSection>
          <FadeInSection>
            <FeatureCard>
              <CardTitle>iPad</CardTitle>
              <CardText>Lovable. Drawable. Magical.</CardText>
              <CardImage src="/assets/images/548x992nr.jpg" />
            </FeatureCard>
          </FadeInSection>
        </FeaturesGrid>
      </IPadContainer>
    </ProductPageLayout>
  );
};
