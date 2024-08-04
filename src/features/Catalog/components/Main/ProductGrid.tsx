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
    {
      imageUrl: LiquorUrl,
      badgeText: '탁주',
      title: '홉미드',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      imageUrl: LiquorUrl,
      badgeText: '탁주',
      title: '홉미드',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      imageUrl: LiquorUrl,
      badgeText: '탁주',
      title: '홉미드',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];

  return (
    <Container>
      {liguorData.map((item) => {
        return <ProductCard key={item.title} liquorInfo={item} />;
      })}
    </Container>
  );
}

export default ProductGrid;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
