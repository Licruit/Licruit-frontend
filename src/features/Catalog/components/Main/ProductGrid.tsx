import styled from 'styled-components';
import Pagination from '@/components/Pagination/Pagination';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useCatalog } from '../../hooks/useCatalog';

function ProductGrid() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const page = searchParams.get('page') || 1;
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const minAlcohol = searchParams.get('min_alcohol');
  const maxAlcohol = searchParams.get('max_alcohol');

  const { catalogData } = useCatalog({
    page: +page,
    category: category ? +category : undefined,
    search: search || undefined,
    min_alcohol: minAlcohol ? +minAlcohol : undefined,
    max_alcohol: maxAlcohol ? +maxAlcohol : undefined,
  });

  return (
    <Container>
      <List>
        {catalogData && catalogData.liquors ? (
          <>
            {catalogData.liquors.map((item) => {
              return <ProductCard key={item.id} liquorInfo={item} />;
            })}
          </>
        ) : (
          '불러올 술이 없습니다.'
        )}
      </List>
      {catalogData && catalogData.pagination ? (
        <Pagination
          totalItems={catalogData.pagination.totalPage}
          currentPage={catalogData.pagination.currentPage}
        />
      ) : null}
    </Container>
  );
}

export default ProductGrid;

const Container = styled.div`
  padding: 20px;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;
