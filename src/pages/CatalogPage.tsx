import { ProductGrid } from '@/features/Catalog';
import Filter from '@/features/Catalog/components/Filter';
import styled from 'styled-components';

function CatalogPage() {
  return (
    <>
      <Content>
        <div className='aside'>
          <Filter />
        </div>
        <div className='article'>
          <ProductGrid />
        </div>
      </Content>
    </>
  );
}

export default CatalogPage;

const Content = styled.div`
  display: flex;

  .aside {
    width: 100%;
    max-width: 354px;

    @media (width >= 1080px) {
      width: 20%;
    }
  }

  .article {
    width: 100%;
    border-left: 1px solid ${({ theme }) => theme.color.neutral[400]};
  }
`;
