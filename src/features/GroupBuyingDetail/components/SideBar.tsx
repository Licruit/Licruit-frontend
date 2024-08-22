import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { SidebarContainer } from '@/styles/components/SideBar';
import GroupBuyingTitle from './GroupBuyingInfo/GroupBuyingTitle';
import GaugeInfo from './Gauge/GaugeInfo';
import GroupBuyingInfo from './GroupBuyingInfo/GroupBuyingInfo';
import GroupBuyingForm from './GroupBuyingForm/GroupBuyingForm';
import { useGroupBuyingDetail } from '../hooks/useGroupBuyingDetail';

function SideBar() {
  const { id: buyingId } = useParams();
  const { groupBuyingDetail } = useGroupBuyingDetail(Number(buyingId));

  if (!groupBuyingDetail) return null;

  const { deadline, title, content, orderCount, totalMin } = groupBuyingDetail;

  return (
    <Container>
      <GroupBuyingTitle deadline={deadline} title={title} content={content} />
      <GaugeInfo orderQuantity={orderCount} goalQuantity={totalMin} />
      <GroupBuyingInfo detailData={groupBuyingDetail} />
      <GroupBuyingForm detailData={groupBuyingDetail} />
    </Container>
  );
}

export default SideBar;

const Container = styled(SidebarContainer)`
  gap: 20px;
`;
