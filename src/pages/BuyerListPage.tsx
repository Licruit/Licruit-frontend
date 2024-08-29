import Tab from '@/components/Header/Tabs';
import MetaTag from '@/components/MetaTag';
import Pagination from '@/components/Pagination/Pagination';
import { BuyerList, useBuyerList } from '@/features/Management';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function BuyerListPage() {
  const { buyingId } = useParams();
  const { buyers, pagination, isEmpty } = useBuyerList(Number(buyingId));

  return (
    <>
      <MetaTag
        title='리크루트 구매자 리스트'
        description='리크루트 플랫폼에서 구매자 관리를 효율적으로 할 수 있는 페이지입니다.'
        keywords='리크루트, 구매자 관리, 리크루트 관리, 구매 관리, 고객 관리, 리크루트 구매, 사이트 관리, 리크루트 플랫폼, 고객 정보, 리크루트 서비스'
        url='https://www.licruit.site/management/:buyingId'
      />
      <Container>
        <TabBox>
          <Tab type='buyerList' queryKey='filter' />
        </TabBox>
        <BuyerList buyers={buyers} isEmpty={isEmpty} />
        {!isEmpty && (
          <Pagination
            totalItems={pagination.totalPage}
            currentPage={pagination.currentPage}
          />
        )}
      </Container>
    </>
  );
}

export default BuyerListPage;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const TabBox = styled.div`
  display: flex;
`;
