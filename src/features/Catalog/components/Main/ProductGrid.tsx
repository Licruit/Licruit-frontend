import { useParams } from 'react-router-dom';

import LiquorUrl from 'public/assets/images/catalog/basil.png';
import styled from 'styled-components';
import ProductCard from './ProductCard';

import { useCatalog } from '../../hooks/useCatalog';

function ProductGrid() {
  const { category, page } = useParams();
  const { catalogData } = useCatalog({ page: +page!, category: +category! });

  // 예시데이터
  const liguorData = [
    {
      id: 1,
      imageUrl: LiquorUrl,
      category_name: '탁주',
      name: '홉미드',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 2,
      imageUrl: LiquorUrl,
      category_name: '탁주',
      name: '홉미드',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 3,
      imageUrl: LiquorUrl,
      category_name: '탁주',
      name: '홉미드',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 4,
      imageUrl: LiquorUrl,
      category_name: '탁주',
      name: '홉미드',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];

  return (
    <Container>
      <List>
        {liguorData.map((item) => {
          return <ProductCard key={item.id} liquorInfo={item} />;
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
