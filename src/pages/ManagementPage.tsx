import MetaTag from '@/components/MetaTag';
import LoadingSpinner from '@/components/Spinner/Spinner';
import { CategoryTab, GroupBuyList } from '@/features/Management';
import GlobalErrorBoundary from '@/layouts/GlobalErrorBoundary';
import { Suspense } from 'react';
import styled from 'styled-components';

function ManagementPage() {
  return (
    <>
      <MetaTag
        title='리크루트 구매자 관리'
        description='리크루트 플랫폼에서 구매자 관리를 효율적으로 할 수 있는 페이지입니다.'
        keywords='리크루트, 구매자 관리, 리크루트 관리, 구매 관리, 고객 관리, 리크루트 구매, 사이트 관리, 리크루트 플랫폼, 고객 정보, 리크루트 서비스'
        url='https://www.licruit.site/management'
      />
      <Container>
        <CategoryTab />
        <GlobalErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <GroupBuyList />
          </Suspense>
        </GlobalErrorBoundary>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export default ManagementPage;
