import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContent = styled.div`
  max-width: 980px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  gap: 0;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin-right: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 32px;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

