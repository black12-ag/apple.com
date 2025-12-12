import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: #fbfbfd;
  border-radius: 18px;
  padding: 40px 30px 0;
  text-align: center;
  transition: transform 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: 180px;
  object-fit: contain;
  margin-top: 20px;
`;

const NewBadge = styled.span`
  display: inline-block;
  background-color: #bf4800;
  color: #fff;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const ProductName = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 8px;
`;

const Tagline = styled.p`
  font-size: 17px;
  line-height: 1.4;
  margin-bottom: 20px;
  color: #6e6e73;
`;

const Price = styled.p`
  font-size: 14px;
  color: #1d1d1f;
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const LearnMoreBtn = styled.a`
  color: #06c;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: ' >';
  }
`;

const BuyBtn = styled.a`
  color: #06c;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: ' >';
  }
`;

interface AirPodsProductCardProps {
  name: string;
  tagline: string;
  price: string;
  image?: string;
  isNew: boolean;
}

export const AirPodsProductCard = ({ name, tagline, price, image, isNew }: AirPodsProductCardProps) => {
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {isNew && <NewBadge>New</NewBadge>}
      <ProductName>{name}</ProductName>
      <Tagline>{tagline}</Tagline>
      <Price>{price}</Price>
      <ButtonGroup>
        <LearnMoreBtn href="#">Learn more</LearnMoreBtn>
        <BuyBtn href="#">Buy</BuyBtn>
      </ButtonGroup>
      {image && <ProductImage src={image} alt={name} />}
    </Card>
  );
};
