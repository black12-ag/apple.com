import { HomeContainer, HeroesSection } from './Home.styles';
import { useHomeLogic } from './Home.logic';
import { RibbonBanner } from './components/RibbonBanner';
import { HeroSection } from './components/HeroSection';
import { PromoGrid } from './components/PromoGrid';

export const HomePage = () => {
  const { heroSections, promoCards } = useHomeLogic();

  return (
    <HomeContainer>
      <RibbonBanner />
      <HeroesSection>
        {heroSections.map((hero, index) => (
          <HeroSection 
            key={index} 
            title={hero.title} 
            subtitle={hero.subtitle}
            image={hero.image}
            bgColor={hero.bgColor}
            textColor={hero.textColor}
            primaryBtn={hero.primaryBtn}
            secondaryBtn={hero.secondaryBtn}
          />
        ))}
      </HeroesSection>
      <PromoGrid cards={promoCards} />
    </HomeContainer>
  );
};
