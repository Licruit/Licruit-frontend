import Tab from '@/components/Header/Tabs';
import Pagination from '@/components/Pagination/Pagination';
import { BuyerList } from '@/features/Management';
import styled from 'styled-components';

function BuyerListPage() {
  return (
    <Container>
      <TabBox>
        <Tab type='buyerList' queryKey='filter' />
      </TabBox>
      <BuyerList />
      <Pagination totalItems={100} currentPage={1} />
    </Container>
  );
}

export default BuyerListPage;

const Container = styled.div`
  flex: 1;
`;

const TabBox = styled.div`
  display: flex;
`;
