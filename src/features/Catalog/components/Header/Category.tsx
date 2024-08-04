import Button from '@/components/Button/Button';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategory } from '../../hooks/useCatalog';

function Category() {
  const { categories } = useCategory();
  const { category } = useParams();

  return (
    <Container>
      {categories?.map((item) => (
        <Button
          key={item.id}
          type='button'
          $theme={category && +category === item.id ? 'primary' : 'neutral'}
          $style='outlined'
          $size='sm'
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
