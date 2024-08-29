import MetaTag from '@/components/MetaTag';
import { ProductGrid, Filter, ProductFallback } from '@/features/Catalog';
import LoadingSpinner from '@/components/Spinner/Spinner';
import { useQueryParams } from '@/features/Catalog/hooks/useQueryParams';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

function CatalogPage() {
  const { page, category, search, minAlcohol, maxAlcohol, sort } =
    useQueryParams();

  return (
    <>
      <MetaTag
        title='리크루트 - 전통주 카탈로그'
        description='다양한 전통주를 찾아보고 필터링하여 원하는 상품을 쉽게 찾아보세요.'
        keywords='리크루트, 전통주, 카탈로그, 술, 상품'
        url='https://www.licruit.site/catalog'
      />
      <Content>
        <div className='aside'>
          <Filter />
        </div>
        <div className='article'>
          <ErrorBoundary
            FallbackComponent={ProductFallback}
            resetKeys={[page, category, search, minAlcohol, maxAlcohol, sort]}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <ProductGrid />
            </Suspense>
          </ErrorBoundary>
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
