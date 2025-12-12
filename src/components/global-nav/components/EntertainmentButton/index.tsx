import styled from 'styled-components';

const Button = styled.button`
  font-size: 12px;
  color: #f5f5f7;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

export const EntertainmentButton = () => {
  return <Button>Entertainment</Button>;
};
