import { CategoryTab, GroupBuyList } from '@/features/Management';
import { Spinner } from '@/styles/components/Spinner';
import { Suspense } from 'react';
import styled from 'styled-components';

function ManagementPage() {
  return (
    <Container>
      <CategoryTab />
      <Suspense
        fallback={
          <SpinnerWrapper>
            <StyledSpinner />
          </SpinnerWrapper>
        }
      >
        <GroupBuyList />
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const SpinnerWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40vh;
`;

const StyledSpinner = styled(Spinner)`
  width: 80px;
  height: 80px;
`;

export default ManagementPage;
