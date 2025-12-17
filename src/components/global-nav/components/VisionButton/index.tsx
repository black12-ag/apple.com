import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-size: 12px;
  color: #1d1d1f;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
  }
`;

export const VisionButton = () => {
  return <StyledLink to="/apple-vision-pro">Vision</StyledLink>;
};
