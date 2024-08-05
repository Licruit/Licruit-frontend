import LiquorUrl from 'public/assets/images/catalog/basil.png';
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
      <List>
        {liguorData.map((item) => {
          return <ProductCard key={item.title} liquorInfo={item} />;
        })}
      </List>
      {/* TODO:페이지네이션 추가 */}
    </Container>
  );
}

export default ProductGrid;

const Container = styled.div``;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
