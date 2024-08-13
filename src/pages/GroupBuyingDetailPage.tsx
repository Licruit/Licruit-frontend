import GaugeInfo from '@/features/GroupBuyingDetail/components/Gauge/GaugeInfo';
import GroupBuyingForm from '@/features/GroupBuyingDetail/components/GroupBuyingForm/GroupBuyingForm';
import GroupBuyingInfo from '@/features/GroupBuyingDetail/components/GroupBuyingInfo';
import GroupBuyingTitle from '@/features/GroupBuyingDetail/components/GroupBuyingTitle';
import WholesalerInfo from '@/features/GroupBuyingDetail/components/WholesalerInfo';
import styled from 'styled-components';

function GroupBuyingDetailPage() {
  return (
    <Container>
      <WholesalerInfo />
      <div className='temp'>
        <GroupBuyingTitle />
        <GaugeInfo />
        <GroupBuyingInfo />
        <GroupBuyingForm />
      </div>
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

  .temp {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
