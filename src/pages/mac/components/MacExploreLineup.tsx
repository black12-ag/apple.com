import { useState } from 'react';
import styled from 'styled-components';
import { FadeInSection } from '../../../components/Animations';

const Container = styled.div`
  padding: 60px 0;
  background: #fff;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto 40px;
`;



const MainTitle = styled.h1`
  font-size: 96px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 20px;
  letter-spacing: -0.015em;
`;

const Tabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? '#1d1d1f' : 'transparent'};
  border: none;
  font-size: 14px;
  color: ${props => props.$active ? '#fff' : '#1d1d1f'};
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 980px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${props => props.$active ? '#1d1d1f' : '#e8e8ed'};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
  max-height: 250px;
`;

const NewBadge = styled.span`
  color: #bf4800;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

const ProductName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 5px;
`;

const ChipName = styled.p`
  font-size: 14px;
  color: #1d1d1f;
  margin: 0 0 15px;
`;

const ColorSwatches = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
`;

const Swatch = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$color};
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.1);
`;

const Description = styled.p`
  font-size: 17px;
  line-height: 1.4;
  color: #1d1d1f;
  margin-bottom: 15px;
  min-height: 50px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #1d1d1f;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled.a<{ $primary?: boolean }>`
  font-size: 14px;
  color: ${props => props.$primary ? '#fff' : '#06c'};
  background: ${props => props.$primary ? '#0071e3' : 'transparent'};
  padding: ${props => props.$primary ? '8px 16px' : '8px 0'};
  border-radius: ${props => props.$primary ? '980px' : '0'};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: ${props => props.$primary ? 'none' : 'underline'};
    opacity: ${props => props.$primary ? 0.9 : 1};
  }
`;

type Category = 'laptop' | 'desktop' | 'display';

interface Product {
    id: string;
    name: string;
    category: Category;
    chip: string;
    tag?: string;
    colors: string[];
    desc: string;
    price: string;
    img: string;
}

const colorsMap: Record<string, string> = {
    midnight: '#2e3642',
    starlight: '#f0e5d3',
    'space-gray': '#7d7e80',
    silver: '#e0e2e1',
    'space-black': '#2e2c2e',
    // iMac dual tones approximate
    blue: '#4477ce',
    purple: '#8e8dce',
    pink: '#ea839b',
    orange: '#f58d4e',
    yellow: '#f9d949',
    green: '#a0d995',
    'sky-blue': '#87ceeb'
};

const products: Product[] = [
    {
        id: 'mba',
        name: 'MacBook Air 13” and 15”',
        category: 'laptop',
        chip: 'M4 chip', // User specified M4 in prompt for MBA
        colors: [colorsMap.midnight, colorsMap.starlight, colorsMap.silver, colorsMap['sky-blue']],
        desc: 'Strikingly thin and fast so you can work, play, or create anywhere.',
        price: 'From $999 or $83.25/mo. for 12 mo.*',
        img: '/assets/mac/real/macbook_air_chip.jpg'
    },
    {
        id: 'mbp',
        name: 'MacBook Pro 14” and 16”',
        category: 'laptop',
        tag: 'New 14” with M5',
        chip: 'M5, M4 Pro, or M4 Max chip',
        colors: [colorsMap['space-black'], colorsMap.silver],
        desc: 'The most advanced Mac laptops for demanding workflows.',
        price: 'From $1599 or $133.25/mo. for 12 mo.*',
        img: '/assets/mac/real/macbook_pro_chip.jpg'
    },
    {
        id: 'imac',
        name: 'iMac',
        category: 'desktop',
        chip: 'M4 chip',
        colors: [colorsMap.blue, colorsMap.purple, colorsMap.pink, colorsMap.orange, colorsMap.yellow, colorsMap.green, colorsMap.silver],
        desc: 'A stunning all-in-one desktop for creativity and productivity.',
        price: 'From $1299 or $108.25/mo. for 12 mo.*',
        img: '/assets/mac/real/imac_chip.jpg'
    },
    {
        id: 'macmini',
        name: 'Mac mini',
        category: 'desktop',
        chip: 'M4 or M4 Pro chip',
        colors: [colorsMap.silver],
        desc: 'The mini-est, most affordable Mac with mighty performance.',
        price: 'From $599 or $49.91/mo. for 12 mo.*',
        img: '/assets/mac/real/mac_mini_chip.jpg'
    },
    {
        id: 'macstudio',
        name: 'Mac Studio',
        category: 'desktop',
        chip: 'M4 Max or M3 Ultra chip',
        colors: [colorsMap.silver],
        desc: 'Powerful performance and extensive connectivity for pro workflows.',
        price: 'From $1999 or $166.58/mo. for 12 mo.*',
        img: '/assets/mac/real/mac_studio_chip.jpg'
    },
    {
        id: 'macpro',
        name: 'Mac Pro',
        category: 'desktop',
        chip: 'M2 Ultra chip',
        colors: [colorsMap.silver],
        desc: 'A pro workstation with PCIe expansion for demanding workflows.',
        price: 'From $6999 or $583.25/mo. for 12 mo.*',
        img: '/assets/mac/real/mac_pro_chip.jpg'
    },
    {
        id: 'studiodisplay',
        name: 'Studio Display',
        category: 'display',
        chip: '',
        colors: [],
        desc: 'A 5K Retina display with stellar camera and audio.',
        price: 'From $1599 or $133.25/mo. for 12 mo.*',
        img: '/assets/mac/real/studio_display.jpg'
    },
    {
        id: 'prodisplay',
        name: 'Pro Display XDR',
        category: 'display',
        chip: '',
        colors: [],
        desc: 'An advanced 6K XDR display for pro workflows.',
        price: 'From $4999 or $416.58/mo. for 12 mo.*',
        img: '/assets/mac/real/pro_display.jpg'
    }
];

export const MacExploreLineup = () => {
    const [filter, setFilter] = useState<Category | 'all'>('all');

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <Container>
            <SectionHeader>
                <MainTitle>Mac</MainTitle>
                <Tabs>
                    <Tab $active={filter === 'all'} onClick={() => setFilter('all')}>All products</Tab>
                    <Tab $active={filter === 'laptop'} onClick={() => setFilter('laptop')}>Laptops</Tab>
                    <Tab $active={filter === 'desktop'} onClick={() => setFilter('desktop')}>Desktops</Tab>
                    <Tab $active={filter === 'display'} onClick={() => setFilter('display')}>Displays</Tab>
                </Tabs>
            </SectionHeader>

            <ProductsGrid>
                {filteredProducts.map(product => (
                    <FadeInSection key={product.id}>
                        <ProductCard>
                            <CardImage src={product.img} alt={product.name} />
                            {product.tag && <NewBadge>{product.tag}</NewBadge>}
                            <ProductName>{product.name}</ProductName>
                            {product.chip && <ChipName>{product.chip}</ChipName>}

                            {product.colors.length > 0 && (
                                <ColorSwatches>
                                    {product.colors.map((c, i) => (
                                        <Swatch key={i} $color={c} />
                                    ))}
                                </ColorSwatches>
                            )}

                            <Description>{product.desc}</Description>
                            <Price>{product.price}</Price>

                            <Links>
                                <Link $primary href="#">Buy</Link>
                                <Link href="#">Learn more &gt;</Link>
                            </Links>
                        </ProductCard>
                    </FadeInSection>
                ))}
            </ProductsGrid>
        </Container>
    );
};
