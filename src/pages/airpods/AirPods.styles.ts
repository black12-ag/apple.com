import styled from 'styled-components';

export const AirPodsContainer = styled.main`
  background-color: #fff;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  background-color: #fbfbfd;
  text-align: center;
  padding: 80px 20px 0;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 6px;
`;

export const Subtitle = styled.p`
  font-size: 28px;
  color: #1d1d1f;
  margin-bottom: 20px;
`;

export const HeroImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-top: auto;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  
  a {
    color: #06c;
    font-size: 21px;
    
    &:hover {
      text-decoration: underline;
    }
    
    &::after {
      content: ' >';
    }
  }
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
