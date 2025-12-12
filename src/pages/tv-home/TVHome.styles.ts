import styled from 'styled-components';

export const TVHomeContainer = styled.main`
  background-color: #fff;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  background-color: #fbfbfd;
  text-align: center;
  padding: 80px 20px 60px;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 28px;
  color: #1d1d1f;
  margin-bottom: 24px;
`;

export const ProductGrid = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ChapterNav = styled.nav`
  background-color: #fbfbfd;
  border-bottom: 1px solid #d2d2d7;
  padding: 12px 0;
  position: sticky;
  top: 44px;
  z-index: 100;
`;

export const ChapterNavList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 32px;
  list-style: none;
  padding: 0 20px;
`;

export const ChapterNavItem = styled.li`
  a {
    font-size: 12px;
    color: #1d1d1f;
    
    &:hover {
      color: #06c;
    }
  }
`;
