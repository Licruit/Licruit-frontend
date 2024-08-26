import Button from '@/components/Button/Button';
import styled from 'styled-components';

function CategoryTab() {
  return (
    <CategoryTabWrapper>
      <Button $style='outlined' $theme='primary' $size='sm'>
        성사
      </Button>
      <Button $style='outlined' $theme='neutral' $size='sm'>
        미달성내역
      </Button>
    </CategoryTabWrapper>
  );
}

const CategoryTabWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default CategoryTab;
