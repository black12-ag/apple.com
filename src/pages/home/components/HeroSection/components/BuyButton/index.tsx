import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  color: #06c;
  font-size: 17px;
  padding: 8px 16px;
  transition: color 0.3s ease;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: ' >';
    margin-left: 4px;
  }
`;

export const BuyButton = () => {
  return <Button href="#">Buy</Button>;
};
