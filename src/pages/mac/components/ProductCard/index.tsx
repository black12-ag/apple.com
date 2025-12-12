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
  max-width: 280px;
  height: 180px;
  object-fit: contain;
  margin-top: 16px;
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
  margin-bottom: 4px;
`;

const Chip = styled.p`
  font-size: 14px;
  color: #6e6e73;
  margin-bottom: 16px;
`;

const Tagline = styled.p`
  font-size: 17px;
  color: #1d1d1f;
  line-height: 1.4;
  margin-bottom: 16px;
  min-height: 48px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #1d1d1f;
  margin-bottom: 16px;
`;

const ColorDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  min-height: 12px;
`;

const ColorDot = styled.span<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  border: 1px solid #d2d2d7;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
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

const colorMap: Record<string, string> = {
  'sky blue': '#a7c7e7',
  'silver': '#c0c0c0',
  'starlight': '#f5e6d3',
  'midnight': '#1d1d1f',
  'space black': '#1d1d1f',
  'blue': '#5eb0e5',
  'purple': '#b8a9c9',
  'pink': '#f9d1cf',
  'orange': '#f9a825',
  'yellow': '#f9e547',
  'green': '#a8d5ba',
};

interface ProductCardProps {
  name: string;
  chip: string;
  tagline: string;
  price: string;
  image?: string;
  colors: string[];
  isNew: boolean;
}

export const ProductCard = ({ name, chip, tagline, price, image, colors, isNew }: ProductCardProps) => {
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {isNew && <NewBadge>New</NewBadge>}
      <ProductName>{name}</ProductName>
      <Chip>{chip}</Chip>
      <Tagline>{tagline}</Tagline>
      <Price>{price}</Price>
      <ColorDots>
        {colors.map((color, i) => (
          <ColorDot key={i} $color={colorMap[color] || '#ccc'} title={color} />
        ))}
      </ColorDots>
      <ButtonGroup>
        <LearnMoreBtn href="#">Learn more</LearnMoreBtn>
        <BuyBtn href="#">Buy</BuyBtn>
      </ButtonGroup>
      {image && <ProductImage src={image} alt={name} />}
    </Card>
  );
};
