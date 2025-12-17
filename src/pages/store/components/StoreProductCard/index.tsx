import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = styled(motion.div)`
  background-color: #fff;
  border-radius: 18px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const NewBadge = styled.span`
  background-color: #bf4800;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 16px;
`;

const ProductName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 4px;
`;

const Tagline = styled.p`
  font-size: 14px;
  color: #6e6e73;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #1d1d1f;
  margin-bottom: 16px;
`;

const BuyLink = styled(Link)`
  background-color: #0071e3;
  color: #fff;
  padding: 10px 20px;
  border-radius: 980px;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0077ed;
  }
`;

interface StoreProductCardProps {
  name: string;
  tagline: string;
  price: string;
  image: string;
  link: string;
  isNew?: boolean;
}

export const StoreProductCard = ({
  name,
  tagline,
  price,
  image,
  link,
  isNew
}: StoreProductCardProps) => {
  return (
    <Card>
      {isNew && <NewBadge>New</NewBadge>}
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <Tagline>{tagline}</Tagline>
      <Price>{price}</Price>
      <BuyLink to={link}>Buy</BuyLink>
    </Card>
  );
};
