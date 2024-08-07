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

  const allCategories = [{ id: 0, name: '전체' }, ...(categories || [])];

  return (
    <Container>
      {allCategories?.map((item) => (
        <Button
          key={item.id}
          type='button'
          $theme={
            (category && +category === item.id) || (item.id === 0 && !category)
              ? 'primary'
              : 'neutral'
          }
          $style='outlined'
          $size='sm'
          onClick={() => {
            if (item.id === 0) {
              searchParams.delete('category');
            } else {
              searchParams.set('category', item.id.toString());
            }
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
