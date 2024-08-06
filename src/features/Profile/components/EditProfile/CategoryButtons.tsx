import Button from '@/components/Button/Button';
import styled from 'styled-components';
import Label from '../common/Label';
import { LABEL } from '../../constants/label';

interface Props {
  categories: string[];
}

function CategoryButtons({ categories }: Props) {
  return (
    <CategoryWrapper>
      <Label label={LABEL.category} isRequired />
      <CategoryButtonWrapper>
        {categories.map((item) => {
          return (
            <Button
              key={item}
              $style='outlined'
              $theme='neutral'
              $size='sm'
              $transparent
            >
              {item}
            </Button>
          );
        })}
      </CategoryButtonWrapper>
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default CategoryButtons;
