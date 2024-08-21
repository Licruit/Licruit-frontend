import Tab from '@/components/Header/Tabs';
import { GroupBuyingGrid, GroupBuyingHeader } from '@/features/GroupBuying';
import Preview from '@/features/GroupBuying/components/Preview';
import styled from 'styled-components';

function GroupBuyingPage() {
  return (
    <Container>
      <PreviewWrapper>
        <Preview />
      </PreviewWrapper>
      <ContentWrapper>
        <GroupBuyingHeader />
        <TabBox>
          <Tab type='group_buying' queryKey='sort' />
        </TabBox>
        <GroupBuyingGrid />
      </ContentWrapper>
    </Container>
  );
}

export default GroupBuyingPage;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 76px);
`;

const PreviewWrapper = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const ContentWrapper = styled.div`
  overflow: scroll;
  flex: 2;
  height: 100vh;
  padding: 20px;
`;

const TabBox = styled.div`
  position: sticky;
  z-index: 999;
  top: -20px;
  left: 0;

  padding: 20px 0;

  background: rgb(255 255 255 / 100%);
  backdrop-filter: blur(10px);
`;
