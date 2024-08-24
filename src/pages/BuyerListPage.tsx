import Tab from '@/components/Header/Tabs';
import Pagination from '@/components/Pagination/Pagination';
import { BuyerList } from '@/features/Management';
import { useBuyerList } from '@/features/Management/hooks/useBuyerList';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function BuyerListPage() {
  const { buyingId } = useParams();
  const { buyers, pagination } = useBuyerList(Number(buyingId));

  if (!buyers || !pagination) return <></>;

  return (
    <Container>
      <TabBox>
        <Tab type='buyerList' queryKey='filter' />
      </TabBox>
      <BuyerList buyers={buyers} />
      <Pagination
        totalItems={pagination.totalPage}
        currentPage={pagination.currentPage}
      />
    </Container>
  );
}

export default BuyerListPage;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TabBox = styled.div`
  display: flex;
`;
