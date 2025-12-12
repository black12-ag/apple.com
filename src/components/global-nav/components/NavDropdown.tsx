import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavSection } from '../navData';

const DropdownContainer = styled(motion.div)`
  position: absolute;
  top: 44px; /* Height of the navbar */
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(22, 22, 23, 0.95); /* Dark semi-transparent background */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  overflow: hidden;
`;

const DropdownContent = styled.div`
  max-width: 1000px; /* Aligns with page content width */
  margin: 0 auto;
  padding: 40px 0 60px;
  display: flex;
  justify-content: flex-start;
  gap: 80px;
`;

const SectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h3`
  font-size: 12px;
  color: #86868b;
  margin-bottom: 8px;
  font-weight: 400;
`;

const NavItemLink = styled.a`
  font-size: 20px; /* Larger font for menu items like Apple */
  color: #f5f5f7;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #2997ff; /* Apple blue hover */
  }

  &.small {
    font-size: 14px;
    font-weight: 400;
    color: #e8e8ed;
  }
`;

interface NavDropdownProps {
    sections: NavSection[];
    isVisible: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export const NavDropdown = ({ sections, isVisible, onMouseEnter, onMouseLeave }: NavDropdownProps) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <DropdownContainer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <DropdownContent>
                        {sections.map((section, idx) => (
                            <SectionColumn key={idx}>
                                {section.title && <SectionTitle>{section.title}</SectionTitle>}
                                {section.items.map((item: { label: string; url: string }) => (
                                    <NavItemLink
                                        key={item.label}
                                        href={item.url}
                                        className={section.title ? 'small' : ''} // Make items smaller if they are in a titled list
                                    >
                                        {item.label}
                                    </NavItemLink>
                                ))}
                            </SectionColumn>
                        ))}
                    </DropdownContent>
                </DropdownContainer>
            )}
        </AnimatePresence>
    );
};
