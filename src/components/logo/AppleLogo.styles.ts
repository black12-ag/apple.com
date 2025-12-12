import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  text-decoration: none;
  margin-right: 8px;
  
  img {
    width: 16px;
    height: 16px;
    display: block;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  &:hover img {
    opacity: 1;
  }
`;
