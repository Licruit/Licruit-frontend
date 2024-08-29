import Tab from '@/components/Header/Tabs';
import Pagination from '@/components/Pagination/Pagination';
import { BuyerList, useBuyerList } from '@/features/Management';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function BuyerListPage() {
  const { buyingId } = useParams();
  const { buyers, pagination, isEmpty } = useBuyerList(Number(buyingId));

  return (
    <>
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
