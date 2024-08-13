import { SideBar } from '@/features/CatalogDetail';
import LiquorIntro from '@/features/CatalogDetail/components/LiquorIntro/LiquorIntro';
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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 80px;
`;
