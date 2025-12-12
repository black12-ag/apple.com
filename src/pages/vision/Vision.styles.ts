import styled from 'styled-components';

export const VisionContainer = styled.main`
  background-color: #000;
  min-height: 100vh;
  color: #f5f5f7;
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px 0;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(180deg, #000 0%, #1a1a1a 100%);
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Subtitle = styled.p`
  font-size: 28px;
  margin-bottom: 20px;
  color: #a1a1a6;
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
    color: #2997ff;
    font-size: 21px;
    
    &:hover {
      text-decoration: underline;
    }
    
    &::after {
      content: ' >';
    }
  }
`;

export const FeatureGrid = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ChapterNav = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid #424245;
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
    color: #f5f5f7;
    opacity: 0.8;
    
    &:hover {
      opacity: 1;
    }
  }
`;
