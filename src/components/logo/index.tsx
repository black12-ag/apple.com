import { LogoLink } from './AppleLogo.styles';

export const AppleLogo = () => {
  return (
    <LogoLink to="/" aria-label="Apple Home">
      <img src="/apple-logo.png" alt="Apple" />
    </LogoLink>
  );
};
