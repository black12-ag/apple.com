import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CtaLink } from '../../../CtaLink';

const Card = styled(motion.div) <{ $bgColor?: string; $textColor?: string }>`
  background-color: ${props => props.$bgColor || '#f5f5f7'};
  color: ${props => props.$textColor || '#1d1d1f'};
  text-align: center;
  padding: 40px 20px 0;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.003em;
  margin-bottom: 6px;
`;

const Description = styled.p`
  font-size: 21px;
  line-height: 1.19;
  font-weight: 400;
  letter-spacing: 0.011em;
  margin-bottom: 12px;
  max-width: 400px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  margin-bottom: 20px;
`;

const PrimaryLink = styled(CtaLink)`
  color: #0071e3;
  font-size: 17px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: '›';
  }
`;

const CardImage = styled(motion.img)`
  max-width: 100%;

  object-fit: contain;
  margin-top: auto;
`;

interface PromoCardProps {
  title: string;
  description: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const PromoCard = ({
  title,
  description,
  image,
  bgColor,
  textColor,
  primaryCta,
  secondaryCta,
}: PromoCardProps) => {
  return (
    <Card $bgColor={bgColor} $textColor={textColor}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {(primaryCta || secondaryCta) && (
        <ButtonGroup>
          {primaryCta && <PrimaryLink href={primaryCta.href}>{primaryCta.label}</PrimaryLink>}
          {secondaryCta && <PrimaryLink href={secondaryCta.href}>{secondaryCta.label}</PrimaryLink>}
        </ButtonGroup>
      )}
      {image && (
        <CardImage
          src={image}
          alt={title}
        />
      )}
    </Card>
  );
};
