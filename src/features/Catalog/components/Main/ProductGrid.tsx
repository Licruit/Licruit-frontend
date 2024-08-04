import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';
import styled from 'styled-components';
import ProductCard from './ProductCard';

function ProductGrid() {
  // 예시데이터
  const liguorData = [
    {
      imageUrl: LiquorUrl,
      badgeText: '탁주',
      title: '홉미드',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];

  return (
    <Container>
      <ProductCard liquorInfo={liguorData[0]} />
    </Container>
  );
}

export default ProductGrid;

const Container = styled.div``;
