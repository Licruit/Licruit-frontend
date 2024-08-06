import { ProductGrid } from '@/features/Catalog';
import Filter from '@/features/Catalog/components/Filter';
import styled from 'styled-components';

function CatalogPage() {
  return (
    <Container>
      <Content>
        <div className='aside'>
          <Filter />
        </div>
        <div className='article'>
          <ProductGrid />
        </div>
      </Content>
    </Container>
  );
}

export default CatalogPage;

const Container = styled.div``;
const Content = styled.div`
  display: flex;
  .aside {
    width: 100%;
    height: 100vh;
    max-width: 354px;
    border-right: 1px solid ${({ theme }) => theme.color.neutral[400]};
  }
`;
