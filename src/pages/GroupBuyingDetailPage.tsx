import {
  SideBar,
  WholesalerInfo,
  useGroupBuyingDetail,
} from '@/features/GroupBuyingDetail';
import { LiquorDetail } from '@/features/LiquorDetail';
import GlobalErrorBoundary from '@/layouts/GlobalErrorBoundary';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function GroupBuyingDetailPage() {
  const { id: buyingId } = useParams();
  const { liquorId } = useGroupBuyingDetail(Number(buyingId));

  return (
    <Container>
      <LiquorDetail liquorId={liquorId}>
        <WholesalerInfo />
      </LiquorDetail>
      <GlobalErrorBoundary size='md'>
        <SideBar />
      </GlobalErrorBoundary>
    </Container>
  );
}

export default GroupBuyingDetailPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  width: 100%;
  padding-bottom: 80px;
`;
