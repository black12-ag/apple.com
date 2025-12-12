import { WatchContainer } from './Watch.styles';
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
  background: linear-gradient(135deg, #000 0%, #333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: 28px;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 20px;
  max-width: 600px;
`;

const HeroImage = styled.img`
  max-width: 1000px;
  width: 90%;
  height: auto;
  margin-top: 40px;
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

export const WatchPage = () => {
  const links = [
    { label: 'Explore All Apple Watch', url: '#' },
    { label: 'Apple Watch Series 10', url: '#' },
    { label: 'Apple Watch Ultra 2', url: '#' },
    { label: 'Apple Watch SE', url: '#' },
    { label: 'Nike', url: '#' },
    { label: 'Hermès', url: '#' },
    { label: 'Shop Watch', url: '#', isCta: true },
  ];

  return (
    <ProductPageLayout productTitle="Watch" links={links}>
      <WatchContainer>
        <FadeInSection>
          <HeroSection>
            <HeroTitle>Apple Watch Series 10</HeroTitle>
            <HeroSubtitle>Thinnest. Biggest display. Advanced health features.</HeroSubtitle>
            <HeroImage src="/assets/images/home/470x264.jpg" alt="Apple Watch Series 10" />
          </HeroSection>
        </FadeInSection>

        <FeaturesGrid>
          <FadeInSection>
            <FeatureCard $dark>
              <CardTitle>Apple Watch Ultra 2</CardTitle>
              <CardText>New black titanium. The ultimate sports and adventure watch.</CardText>
              <CardImage src="/assets/images/home/226x226sr.jpg" />
            </FeatureCard>
          </FadeInSection>
          <FadeInSection>
            <FeatureCard>
              <CardTitle>Apple Watch SE</CardTitle>
              <CardText>A great deal to love.</CardText>
              <CardImage src="/assets/images/home/220x54.png" />
            </FeatureCard>
          </FadeInSection>
        </FeaturesGrid>
      </WatchContainer>
    </ProductPageLayout>
  );
};
