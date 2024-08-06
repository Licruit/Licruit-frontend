import Button from '@/components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCategory } from '../../hooks/useCatalog';

function Category() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { categories } = useCategory();
  const category = searchParams.get('category');

  const navigate = useNavigate();
  return (
    <Container>
      {categories?.map((item) => (
        <Button
          key={item.id}
          type='button'
          $theme={category && +category === item.id ? 'primary' : 'neutral'}
          $style='outlined'
          $size='sm'
          onClick={() => {
            searchParams.set('category', item.id.toString());
            navigate(`/catalog?${searchParams.toString()}`);
          }}
        >
          {item.name}
        </Button>
      ))}
    </Container>
  );
}

export default Category;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
