import { LiquorDetail, SideBar } from '@/features/CatalogDetail';
import styled from 'styled-components';

function CatelogDetailPage() {
  return (
    <Container>
      <LiquorDetail />
      <SideBar />
    </Container>
  );
}

export default CatelogDetailPage;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 80px;
`;
