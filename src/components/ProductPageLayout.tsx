import styled from 'styled-components';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageContainer = styled.div`
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LocalNavContainer = styled(motion.div) <{ $isSticky?: boolean }>`
  position: sticky;
  top: 0;
  z-index: 90;
  background: rgba(255, 255, 255, ${props => props.$isSticky ? 0.9 : 0.7});
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0,0,0,${props => props.$isSticky ? 0.16 : 0});
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LocalNavContent = styled.div`
  max-width: 980px;
  width: 100%;
  padding: 0 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductTitle = styled.h2`
  font-size: 21px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
`;

const LocalNavLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const LocalLink = styled.a`
  font-size: 12px;
  color: #1d1d1f;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: #06c;
  }

  &.cta {
    background: #0071e3;
    color: white;
    padding: 4px 10px;
    border-radius: 980px;
    opacity: 1;

    &:hover {
      background: #0077ed;
    }
  }
`;

interface ProductPageLayoutProps {
  children: React.ReactNode;
  productTitle?: string;
  links?: { label: string; url: string; isCta?: boolean }[];
}

export const ProductPageLayout = ({ children, productTitle, links }: ProductPageLayoutProps) => {
  const { scrollY } = useScroll();
  const [isSticky, setIsSticky] = useState(false);

  // Example logic: Toggle sticky state or styles based on scroll
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsSticky(latest > 60);
    });
  }, [scrollY]);

  return (
    <PageContainer>
      {productTitle && (
        <LocalNavContainer
          $isSticky={isSticky}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LocalNavContent>
            <ProductTitle>{productTitle}</ProductTitle>
            <LocalNavLinks>
              {links?.map((link) => (
                <LocalLink
                  key={link.label}
                  href={link.url}
                  className={link.isCta ? 'cta' : ''}
                >
                  {link.label}
                </LocalLink>
              ))}
            </LocalNavLinks>
          </LocalNavContent>
        </LocalNavContainer>
      )}
      <MainContent>
        {children}
      </MainContent>
    </PageContainer>
  );
};
