import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = styled.div`
  background-color: #f5f5f7;
  color: #1d1d1f;
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  
  a {
    color: #06c;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RibbonBanner = () => {
  return (
    <Banner>
      Order by 12/22 for free delivery of in‑stock items by 12/24. See checkout for specific delivery dates and options.{' '}
      <Link to="/store">Shop</Link>
    </Banner>
  );
};
