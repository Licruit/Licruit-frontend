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
  margin-right: 20px;
  flex: 1;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  flex: 2;
  height: 100vh;
  overflow: scroll;
`;
