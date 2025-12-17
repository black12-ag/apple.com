import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
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

