import styled from 'styled-components';
import { FilmCard } from './components/FilmCard';

const Section = styled.section`
  background: #fff;
  padding: 40px 0 60px;
`;

const Header = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -0.003em;
  margin: 0;
  color: #1d1d1f;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Grid = styled.div`
  max-width: 1400px;
  margin: 28px auto 0;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1068px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 734px) {
    grid-template-columns: 1fr;
  }
`;

interface MoreFromAppleProps {
  items: Array<{
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    href: string;
  }>;
}

export const MoreFromApple = ({ items }: MoreFromAppleProps) => {
  return (
    <Section>
      <Header>
        <Title>More from Apple</Title>
      </Header>
      <Grid>
        {items.map((item) => (
          <FilmCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            href={item.href}
          />
        ))}
      </Grid>
    </Section>
  );
};
