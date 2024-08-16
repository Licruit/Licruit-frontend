import MetaTag from '@/components/MetaTag';
import { LiquorDetail, SideBar } from '@/features/CatalogDetail';
import styled from 'styled-components';

function CatelogDetailPage() {
  return (
    <Container>
      <MetaTag
        title='리쿠르트 - 전통주 상세 정보'
        description='이 페이지에서 다양한 전통주의 상세 정보를 확인해보세요.'
        keywords='리쿠르트, 전통주, 상세 정보, 술'
        url='https://www.licruit.site/catalog/:id'
      />
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
