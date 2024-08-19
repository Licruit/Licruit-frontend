import MetaTag from '@/components/MetaTag';
import { LiquorIntro, SideBar } from '@/features/CatalogDetail';
import { LiquorDetail } from '@/features/LiquorDetail';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function CatalogDetailPage() {
  const { id } = useParams();

  return (
    <Container>
      <MetaTag
        title='리쿠르트 - 전통주 상세 정보'
        description='이 페이지에서 다양한 전통주의 상세 정보를 확인해보세요.'
        keywords='리쿠르트, 전통주, 상세 정보, 술'
        url='https://www.licruit.site/catalog/:id'
      />
      <LiquorDetail liquorId={Number(id)}>
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
