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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  width: 100%;
  padding-bottom: 80px;
`;
