import { LiquorIntro, SideBar } from '@/features/CatalogDetail';
import { LiquorDetail } from '@/features/LiquorDetail';
import styled from 'styled-components';

function CatalogDetailPage() {
  return (
    <Container>
      <LiquorDetail>
        <LiquorIntro />
      </LiquorDetail>
      <SideBar />
    </Container>
  );
}

export default CatalogDetailPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  width: 100%;
  padding-bottom: 80px;
`;
