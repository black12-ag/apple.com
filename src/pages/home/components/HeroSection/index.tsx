import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section<{ $bgColor?: string; $textColor?: string }>`
  background-color: ${props => props.$bgColor || '#f5f5f7'};
  color: ${props => props.$textColor || '#1d1d1f'};
  text-align: center;
  padding: 60px 20px 0;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 56px;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: -0.005em;
  margin-bottom: 6px;
`;

const Subtitle = styled(motion.p)`
  font-size: 28px;
  line-height: 1.14;
  font-weight: 400;
  letter-spacing: 0.007em;
  margin-bottom: 16px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const PrimaryButton = styled(Link)`
  background-color: #0071e3;
  color: #fff;
  padding: 12px 22px;
  border-radius: 980px;
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0077ed;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: #0071e3;
  padding: 12px 22px;
  border-radius: 980px;
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  border: 1px solid #0071e3;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0071e3;
    color: #fff;
  }
`;

const HeroImage = styled(motion.img)`
  max-width: 100%;

  object-fit: contain;
  margin-top: auto;
`;

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  primaryBtn?: { text: string; link: string };
  secondaryBtn?: { text: string; link: string };
}

export const HeroSection = ({
  title,
  subtitle,
  image,
  bgColor,
  textColor,
  primaryBtn,
  secondaryBtn,
}: HeroSectionProps) => {
  return (
    <HeroContainer $bgColor={bgColor} $textColor={textColor}>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {subtitle}
      </Subtitle>
      <ButtonGroup
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {primaryBtn && <PrimaryButton to={primaryBtn.link}>{primaryBtn.text}</PrimaryButton>}
        {secondaryBtn && <SecondaryButton to={secondaryBtn.link}>{secondaryBtn.text}</SecondaryButton>}
      </ButtonGroup>
      {image && (
        <HeroImage
          src={image}
          alt={title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      )}
    </HeroContainer>
  );
};
