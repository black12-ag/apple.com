import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface CtaLinkProps {
  className?: string;
  children: ReactNode;
  href: string;
  ariaLabel?: string;
}
export const CtaLink = ({ className, children, href, ariaLabel }: CtaLinkProps) => {
  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a className={className} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={href} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};
