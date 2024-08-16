import styled from 'styled-components';
import { SidebarContainer } from '@/styles/components/SideBar';
import GroupBuyingTitle from './GroupBuyingInfo/GroupBuyingTitle';
import GaugeInfo from './Gauge/GaugeInfo';
import GroupBuyingInfo from './GroupBuyingInfo/GroupBuyingInfo';
import GroupBuyingForm from './GroupBuyingForm/GroupBuyingForm';

function SideBar() {
  return (
    <Container>
      <GroupBuyingTitle />
      <GaugeInfo />
      <GroupBuyingInfo />
      <GroupBuyingForm />
    </Container>
  );
}

export default SideBar;

const Container = styled(SidebarContainer)`
  gap: 20px;
`;
