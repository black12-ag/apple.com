import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f5f5f7;
  color: #1d1d1f;
  padding: 40px 20px;
  margin-top: 60px;
`;

export const FooterContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

export const FooterNote = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: #6e6e73;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d2d2d7;
`;

export const FooterSections = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #d2d2d7;
  font-size: 12px;
  color: #6e6e73;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    color: #6e6e73;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
