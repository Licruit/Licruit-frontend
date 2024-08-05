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
    max-width: 354px;
  }
`;
