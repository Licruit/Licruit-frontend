import { CategoryTab, GroupBuyList } from '@/features/Management';
import styled from 'styled-components';

function ManagementPage() {
  return (
    <Container>
      <CategoryTab />
      <GroupBuyList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export default ManagementPage;
