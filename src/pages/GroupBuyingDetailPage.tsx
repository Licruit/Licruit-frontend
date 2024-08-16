import { SideBar, WholesalerInfo } from '@/features/GroupBuyingDetail';
import { LiquorDetail } from '@/features/LiquorDetail';
import styled from 'styled-components';

function GroupBuyingDetailPage() {
  return (
    <Container>
      <LiquorDetail>
        <WholesalerInfo />
      </LiquorDetail>
      <SideBar />
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
