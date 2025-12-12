import styled from 'styled-components';

const Section = styled.div`
  h4 {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    margin-bottom: 8px;
  }
`;

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <Section>
      <h4>{title}</h4>
      <ul>{children}</ul>
    </Section>
  );
};
