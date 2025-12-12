import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background: rgba(255,255,255,0.98);
  border-bottom: 1px solid rgba(0,0,0,0.16);
  position: sticky;
  top: 44px; /* Sits below the 44px GlobalNav */
  z-index: 99;
  backdrop-filter: blur(20px);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 12px 20px;
  margin: 0;
  list-style: none;
  overflow-x: auto;
  white-space: nowrap;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  min-width: 60px;

  &:hover span {
    color: #06c;
    opacity: 1;
  }
`;

const Icon = styled.img`
  height: 54px;
  width: auto;
  margin-bottom: 8px;
  display: block;
`;

const Label = styled.span`
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: #1d1d1f;
  text-align: center;
  transition: color 0.2s ease;
`;

const NewBadge = styled.span`
  font-size: 9px;
  color: #bf4800;
  margin-top: 2px;
  display: block;
`;

interface ChapterNavItemProps {
    label: string;
    icon: string;
    isNew?: boolean;
}

const items: ChapterNavItemProps[] = [
    { label: 'MacBook Air', icon: 'macbook_air.svg' },
    { label: 'MacBook Pro', icon: 'macbook_pro.svg', isNew: true },
    { label: 'iMac', icon: 'imac.svg' },
    { label: 'Mac mini', icon: 'mac_mini.svg' },
    { label: 'Mac Studio', icon: 'mac_studio.svg' },
    { label: 'Mac Pro', icon: 'mac_pro.svg' },
    { label: 'Help Me Choose', icon: 'help_me_choose.svg' },
    { label: 'Compare', icon: 'compare.svg' },
    { label: 'Displays', icon: 'displays.svg' },
    { label: 'Accessories', icon: 'accessories.svg' },
    // Shop Mac uses a text fallback if icon missing, but usually an SVG too. 
    // For 'Shop Mac', Apple actually uses a generic bag or text. 
    // We'll skip for now or use a generic icon if needed, but user list has plain text 'Shop Mac'.
];

export const ChapterNav = () => {
    return (
        <Container>
            <NavList>
                {items.map((item) => (
                    <NavItem key={item.label}>
                        <Icon src={`/assets/mac/icons/${item.icon}`} alt={item.label} />
                        <Label>
                            {item.label}
                            {item.isNew && <NewBadge>New</NewBadge>}
                        </Label>
                    </NavItem>
                ))}
                <NavItem>
                    {/* Fallback for text-only items if any */}
                    <Label style={{ marginTop: 60 }}>Shop Mac</Label>
                </NavItem>
            </NavList>
        </Container>
    );
};
