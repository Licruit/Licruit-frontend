import LiquorIntro from '@/features/CatalogDetail/components/LiquorIntro';
import styled from 'styled-components';

function CatelogDetailPage() {
  return (
    <Container>
      <div className='wrapper'>
        <div className='temp-img'>임시 이미지</div>
        <LiquorIntro />
        <div>정보/리뷰 탭</div>
      </div>

      <aside>공동구매 목록</aside>
    </Container>
  );
}

export default CatelogDetailPage;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .temp-img {
    background-color: lightgray;
    height: 500px;
  }
`;
