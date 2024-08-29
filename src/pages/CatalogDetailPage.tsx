import MetaTag from '@/components/MetaTag';
import LoadingSpinner from '@/components/Spinner/Spinner';
import { LiquorIntro, SideBar } from '@/features/CatalogDetail';
import { LiquorDetail } from '@/features/LiquorDetail';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function CatalogDetailPage() {
  const { id: liquorId } = useParams();

  return (
    <Container>
      <MetaTag
        title='리크루트 - 전통주 상세 정보'
        description='이 페이지에서 다양한 전통주의 상세 정보를 확인해보세요.'
        keywords='리크루트, 전통주, 상세 정보, 술'
        url='https://www.licruit.site/catalog/:id'
      />
      <Suspense fallback={<LoadingSpinner />}>
        <LiquorDetail liquorId={Number(liquorId)}>
          <LiquorIntro liquorId={Number(liquorId)} />
        </LiquorDetail>
        <SideBar />
      </Suspense>
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
