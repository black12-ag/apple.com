import { IPhoneContainer } from './iPhone.styles';
import { ProductPageLayout } from '../../components/ProductPageLayout';
import { FadeInSection } from '../../components/Animations';
import styled from 'styled-components';

const HeroSection = styled.div`
  background: #000;
  color: #f5f5f7;
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
  color: #f5f5f7;
`;

const HeroSubtitle = styled.p`
  font-size: 28px;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 20px;
  color: #a1a1a6;
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
  background: ${props => props.$dark ? '#000' : '#f5f5f7'};
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

export const IPhonePage = () => {
  const links = [
    { label: 'Explore All iPhone', url: '#' },
    { label: 'iPhone 16 Pro', url: '#' },
    { label: 'iPhone 16', url: '#' },
    { label: 'iPhone 15', url: '#' },
    { label: 'iPhone SE', url: '#' },
    { label: 'Compare', url: '#' },
    { label: 'Shop iPhone', url: '#', isCta: true },
  ];

  return (
    <ProductPageLayout productTitle="iPhone" links={links}>
      <IPhoneContainer>
        <FadeInSection>
          <HeroSection>
            <HeroTitle>iPhone 16 Pro</HeroTitle>
            <HeroSubtitle>Hello, Apple Intelligence.</HeroSubtitle>
            <HeroImage src="/assets/iphone/iphone_1.jpg" alt="iPhone 16 Pro" />
          </HeroSection>
        </FadeInSection>

        <FeaturesGrid>
          <FadeInSection>
            <FeatureCard>
              <CardTitle>iPhone 16</CardTitle>
              <CardText>Powerful. Beautiful. Capable.</CardText>
              <CardImage src="/assets/iphone/iphone_2.jpg" />
            </FeatureCard>
          </FadeInSection>
          <FadeInSection>
            <FeatureCard $dark>
              <CardTitle>iPhone 16 Pro</CardTitle>
              <CardText>The ultimate iPhone.</CardText>
              <CardImage src="/assets/iphone/iphone_1.jpg" />
            </FeatureCard>
          </FadeInSection>
        </FeaturesGrid>
      </IPhoneContainer>
    </ProductPageLayout>
  );
};
