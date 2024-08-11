import Button from '@/components/Button/Button';
import { useCategory } from '@/hooks/category/useCategory';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCatalogCategory } from '../../api/catalog.api';

function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const category = searchParams.get('category');
  const page = searchParams.get('page');
  const { categories } = useCategory(getCatalogCategory);
  const allCategories = [{ id: 0, name: '전체' }, ...(categories || [])];

  return (
    <Container>
      {allCategories?.map((item) => (
        <Button
          key={item.id}
          type='button'
          $theme={
            (category && Number(category) === item.id) ||
            (item.id === 0 && !category)
              ? 'primary'
              : 'neutral'
          }
          $style='outlined'
          $size='sm'
          onClick={() => {
            if (page) {
              searchParams.set('page', String(1));
            }
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
