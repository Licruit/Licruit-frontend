import LoadingSpinner from '@/components/Spinner/Spinner';
import { CategoryTab, GroupBuyList } from '@/features/Management';
import GlobalErrorBoundary from '@/layouts/GlobalErrorBoundary';
import { Suspense } from 'react';
import styled from 'styled-components';

function ManagementPage() {
  return (
    <Container>
      <CategoryTab />
      <GlobalErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <GroupBuyList />
        </Suspense>
      </GlobalErrorBoundary>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export default ManagementPage;
