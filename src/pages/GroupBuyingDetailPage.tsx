import WholesalerInfo from '@/features/GroupBuyingDetail/components/WholesalerInfo';
import styled from 'styled-components';

function GroupBuyingDetailPage() {
  return (
    <Container>
      <WholesalerInfo />
      <div>info</div>
    </Container>
  );
}

export default GroupBuyingDetailPage;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 80px;
`;
