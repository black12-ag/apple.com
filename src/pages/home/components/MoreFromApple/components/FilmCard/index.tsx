import styled from 'styled-components';
import { CtaLink } from '../../../CtaLink';

const Card = styled(CtaLink)`
  display: block;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  background: #000;
  min-height: 420px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
  color: #fff;
`;

const FilmTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.002em;
`;

const FilmSubtitle = styled.p`
  margin: 6px 0 0;
  font-size: 14px;
  opacity: 0.85;
`;

interface FilmCardProps {
  title: string;
  subtitle?: string;
  image: string;
  href: string;
}

export const FilmCard = ({ title, subtitle, image, href }: FilmCardProps) => {
  return (
    <Card href={href} ariaLabel={title}>
      <BackgroundImage src={image} alt={title} loading="lazy" />
      <Overlay>
        <FilmTitle>{title}</FilmTitle>
        {subtitle && <FilmSubtitle>{subtitle}</FilmSubtitle>}
      </Overlay>
    </Card>
  );
};
