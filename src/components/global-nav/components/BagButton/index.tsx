import styled from 'styled-components';

const Button = styled.button`
  width: 16px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 16px;
    height: 16px;
    fill: #1d1d1f;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  &:hover svg {
    opacity: 1;
  }
`;

export const BagButton = () => {
  return (
    <Button aria-label="Shopping Bag">
      <svg viewBox="0 0 16 44">
        <path d="M14.5 14h-3.75a.25.25 0 0 1-.25-.25V12.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v1.25c0 .138-.112.25-.25.25H.5c-.276 0-.5.224-.5.5v15c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5v-15c0-.276-.224-.5-.5-.5zM4 12.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5v1.25c0 .138-.112.25-.25.25h-4.5a.25.25 0 0 1-.25-.25V12.5z" />
      </svg>
    </Button>
  );
};
