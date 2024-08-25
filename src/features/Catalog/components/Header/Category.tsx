import Button from '@/components/Button/Button';
import PATH from '@/constants/path';
import { useCategory } from '@/hooks/category/useCategory';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const category = searchParams.get('category');
  const page = searchParams.get('page');
  const { categories } = useCategory();
  const allCategories = [{ id: 0, name: '전체' }, ...(categories || [])];

  const handleCategoryClick = (item: number) => {
    if (page) {
      searchParams.set('page', String(1));
    }
    if (item === 0) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', item.toString());
    }
    navigate(`${PATH.catalog}?${searchParams.toString()}`);
  };
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
            handleCategoryClick(item.id);
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
