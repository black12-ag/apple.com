import styled from 'styled-components';
import { PromoCard } from './components/PromoCard';

const Grid = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface PromoGridProps {
  tiles: Array<{
    id: string;
    title: string;
    subtitle: string;
    image?: string;
    bgColor?: string;
    textColor?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  }>;
}

export const PromoGrid = ({ tiles }: PromoGridProps) => {
  return (
    <Grid>
      {tiles.map((tile) => (
        <PromoCard 
          key={tile.id}
          title={tile.title}
          description={tile.subtitle}
          image={tile.image}
          bgColor={tile.bgColor}
          textColor={tile.textColor}
          primaryCta={tile.primaryCta}
          secondaryCta={tile.secondaryCta}
        />
      ))}
    </Grid>
  );
};
