import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CtaLink } from '../CtaLink';

const CarouselSection = styled.section`
  padding: 20px 0 60px;
  background-color: #f5f5f7;
  overflow: hidden;
`;

const CarouselHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const CarouselTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const CarouselContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  padding: 0 20px;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

const Slide = styled(motion.div)`
  min-width: 800px;
  height: 450px;
  background-color: #fff;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    min-width: 300px;
    height: 250px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SlideLink = styled(CtaLink)`
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
`;

const OverlayButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 980px;
  background: rgba(255, 255, 255, 0.92);
  color: #1d1d1f;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

const OverlayMeta = styled.p`
  margin: 12px 0 0;
  font-size: 16px;
  line-height: 1.25;
  max-width: 520px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#1d1d1f' : '#d2d2d7'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.$active ? '#1d1d1f' : '#86868b'};
  }
`;

interface CarouselItem {
  id: string;
  image: string;
  ctaLabel: string;
  metaLine: string;
  href: string;
}

interface CarouselProps {
  items: CarouselItem[];
  title?: string;
}

export const Carousel = ({ items, title = 'Endless entertainment.' }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotSelect = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, [items]);

  const dotClickHandlers = items.map((_, index) => {
    return () => handleDotSelect(index);
  });

  return (
    <CarouselSection>
      <CarouselHeader>
        <CarouselTitle>{title}</CarouselTitle>
      </CarouselHeader>

      <CarouselContainer
        ref={containerRef}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {items.map((item) => (
          <Slide key={item.id}>
            <SlideLink href={item.href} ariaLabel={item.metaLine}>
              <SlideImage src={item.image} alt={item.metaLine} loading="lazy" />
              <SlideOverlay>
                <OverlayButton>{item.ctaLabel}</OverlayButton>
                <OverlayMeta>{item.metaLine}</OverlayMeta>
              </SlideOverlay>
            </SlideLink>
          </Slide>
        ))}
      </CarouselContainer>

      <ButtonGroup>
        {items.map((item, index) => (
          <Dot key={item.id} $active={index === activeIndex} onClick={dotClickHandlers[index]} />
        ))}
      </ButtonGroup>
    </CarouselSection>
  );
};
