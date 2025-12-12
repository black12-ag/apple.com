import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: #1d1d1f;
  border-radius: 18px;
  padding: 40px 30px 0;
  text-align: center;
  transition: transform 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: 180px;
  object-fit: contain;
  margin-top: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: #f5f5f7;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 17px;
  line-height: 1.4;
  color: #a1a1a6;
`;

interface VisionFeatureCardProps {
  title: string;
  description: string;
  image?: string;
}

export const VisionFeatureCard = ({ title, description, image }: VisionFeatureCardProps) => {
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <FeatureTitle>{title}</FeatureTitle>
      <Description>{description}</Description>
      {image && <FeatureImage src={image} alt={title} />}
    </Card>
  );
};
