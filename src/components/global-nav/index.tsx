import { useState } from 'react';
import { NavContainer, NavContent, LogoSection, NavList, NavItem } from './GlobalNav.styles';
import { AppleLogo } from '../logo';
import { SearchButton } from './components/SearchButton';
import { BagButton } from './components/BagButton';
import { globalNavData } from './navData';
import { NavDropdown } from './components/NavDropdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavTrigger = styled(Link)`
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  padding: 0 8px;
  height: 44px;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

export const GlobalNav = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveMenuId(id);
  };

  const handleMouseLeave = () => {
    setActiveMenuId(null);
  };

  return (
    <NavContainer onMouseLeave={handleMouseLeave}>
      <NavContent>
        <LogoSection>
          <Link to="/">
            <AppleLogo />
          </Link>
        </LogoSection>
        <NavList>
          {globalNavData.map((menu) => (
            <NavItem
              key={menu.id}
              onMouseEnter={() => handleMouseEnter(menu.id)}
            >
              <NavTrigger to={`/${menu.id === 'store' ? 'store' : menu.id}`}>
                {menu.label}
              </NavTrigger>
              <NavDropdown
                sections={menu.sections}
                isVisible={activeMenuId === menu.id}
                onMouseEnter={() => handleMouseEnter(menu.id)}
                onMouseLeave={handleMouseLeave}
              />
            </NavItem>
          ))}
        </NavList>
        <div style={{ display: 'flex', gap: '32px' }}>
          <SearchButton />
          <BagButton />
        </div>
      </NavContent>
    </NavContainer>
  );
};
