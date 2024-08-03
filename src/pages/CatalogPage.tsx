import { CatalogHeader, ProductGrid, Sidebar } from '@/features/Catalog';
import styled from 'styled-components';

function CatalogPage() {
  return (
    <Container>
      <CatalogHeader />
      <Content>
        <div className='aside'>
          <Sidebar />
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
`;
