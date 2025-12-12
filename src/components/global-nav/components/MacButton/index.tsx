import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-size: 12px;
  color: #f5f5f7;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
  }
`;

export const MacButton = () => {
  return <StyledLink to="/mac">Mac</StyledLink>;
};
