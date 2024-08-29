import MetaTag from '@/components/MetaTag';
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
    <>
      <MetaTag
        title='리크루트 공동 구매 상세'
        description='리크루트 플랫폼에서 공동 구매에 대한 상세 정보를 확인할 수 있는 페이지입니다.'
        keywords='리크루트, 공동 구매, 리크루트 공동 구매, 리크루트 상세 정보, 술 구매, 도매상 정보, 공동 구매 관리, 구매 세부사항, 사이트 관리'
        url='https://www.licruit.site/group-buying/:id'
      />
      <Container>
        <LiquorDetail liquorId={liquorId}>
          <WholesalerInfo />
        </LiquorDetail>
        <GlobalErrorBoundary size='md'>
          <SideBar />
        </GlobalErrorBoundary>
      </Container>
    </>
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
