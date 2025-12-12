import styled from 'styled-components';

const Link = styled.a`
  font-size: 12px;
  color: #424245;
  
  &:hover {
    text-decoration: underline;
  }
`;

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => {
  return <Link href={href}>{children}</Link>;
};
