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

export const SearchButton = () => {
  return (
    <Button aria-label="Search">
      <svg viewBox="0 0 16 44">
        <path d="M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 1 1 0-9.86 4.93 4.93 0 0 1 0 9.86z" />
      </svg>
    </Button>
  );
};
