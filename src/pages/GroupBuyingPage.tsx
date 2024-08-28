import Tab from '@/components/Header/Tabs';
import {
  GroupBuyingGrid,
  GroupBuyingHeader,
  Fallback,
  Region,
  Preview,
} from '@/features/GroupBuying';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function GroupBuyingPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sort = searchParams.get('sort');
  const region = searchParams.get('region');
  return (
    <Container>
      <PreviewWrapper>
        <Preview />
      </PreviewWrapper>
      <ContentWrapper>
        <GroupBuyingHeader />
        <Filter>
          <TabBox>
            <Tab type='group_buying' queryKey='sort' />
          </TabBox>
          <Region />
        </Filter>
        <ErrorBoundary FallbackComponent={Fallback} resetKeys={[sort, region]}>
          <GroupBuyingGrid sort={sort} region={region} />
        </ErrorBoundary>
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
`;

const ContentWrapper = styled.div`
  overflow: auto;
  flex: 2;
  padding: 20px 40px 40px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
