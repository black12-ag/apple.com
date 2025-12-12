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

interface PromoCardData {
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
  link: string;
}

interface PromoGridProps {
  cards: PromoCardData[];
}

export const PromoGrid = ({ cards }: PromoGridProps) => {
  return (
    <Grid>
      {cards.map((card, index) => (
        <PromoCard 
          key={index} 
          title={card.title} 
          description={card.subtitle}
          image={card.image}
          bgColor={card.bgColor}
          link={card.link}
        />
      ))}
    </Grid>
  );
};
