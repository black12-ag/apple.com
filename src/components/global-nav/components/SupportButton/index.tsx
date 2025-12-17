import styled from 'styled-components';

const Button = styled.button`
  font-size: 12px;
  color: #1d1d1f;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

export const SupportButton = () => {
  return <Button>Support</Button>;
};
