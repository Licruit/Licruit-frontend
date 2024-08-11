import styled from 'styled-components';
import Pagination from '@/components/Pagination/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useCatalog } from '../../hooks/useCatalog';

function ProductGrid() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const page = searchParams.get('page') || 1;
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const minAlcohol = searchParams.get('minAlcohol');
  const maxAlcohol = searchParams.get('maxAlcohol');

  const { catalogData } = useCatalog({
    page: Number(page),
    category: category ? +category : undefined,
    search: search || undefined,
    minAlcohol: minAlcohol ? +minAlcohol : undefined,
    maxAlcohol: maxAlcohol ? +maxAlcohol : undefined,
  });

  return (
    <Container>
      <List>
        {catalogData && catalogData.liquors ? (
          <>
            {catalogData.liquors.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  liquorInfo={item}
                  onClick={() => navigate(`/catalog/:${item.id}`)}
                />
              );
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
  height: calc(100vh - 262px);
  overflow: scroll;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;
