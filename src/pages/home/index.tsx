import { HomeContainer, HeroesSection } from './Home.styles';
import { useHomeLogic } from './Home.logic';
import { RibbonBanner } from './components/RibbonBanner';
import { HeroSection } from './components/HeroSection';
import { PromoGrid } from './components/PromoGrid';
import { Carousel } from './components/Carousel';
import { MoreFromApple } from './components/MoreFromApple';

export const HomePage = () => {
  const { heroSections, promoTiles, entertainmentItems, moreFromAppleItems } = useHomeLogic();

  return (
    <HomeContainer>
      <RibbonBanner />
      <HeroesSection>
        {heroSections.map((hero) => (
          <HeroSection
            key={hero.id}
            title={hero.title}
            subtitle={hero.subtitle}
            image={hero.image}
            bgColor={hero.bgColor}
            textColor={hero.textColor}
            primaryCta={hero.primaryCta}
            secondaryCta={hero.secondaryCta}
          />
        ))}
      </HeroesSection>
      <PromoGrid tiles={promoTiles} />
      <Carousel items={entertainmentItems} />
      <MoreFromApple items={moreFromAppleItems} />
    </HomeContainer>
  );
};
