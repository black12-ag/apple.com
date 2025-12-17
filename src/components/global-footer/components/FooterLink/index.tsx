import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  font-size: 12px;
  color: #424245;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => {
  return <Link to={href}>{children}</Link>;
};
