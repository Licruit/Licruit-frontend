import styled from 'styled-components';
import Pagination from '@/components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useCatalog } from '../../hooks/useCatalog';
import Empty from '../Empty';

function ProductGrid() {
  const navigate = useNavigate();
  const { catalogData } = useCatalog();

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
          <Empty />
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
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;
