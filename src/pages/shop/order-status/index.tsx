import styled from 'styled-components';
import { ProductPageLayout } from '../../../components/ProductPageLayout';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f7;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 21px;
  color: #86868b;
  max-width: 600px;
  text-align: center;
`;

export const Page = () => {
  return (
    <ProductPageLayout>
      <Container>
        <Title>Order Status</Title>
        <Description>
          This is a placeholder for the verified Order Status page. 
          Content would typically be fetched or implemented here.
        </Description>
      </Container>
    </ProductPageLayout>
  );
};
