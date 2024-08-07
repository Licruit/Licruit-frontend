import Button from '@/components/Button/Button';
import styled from 'styled-components';
import Label from '../common/Label';
import { INPUT } from '../../constants/input';

interface Props {
  categories: string[];
}

function CategoryButtons({ categories }: Props) {
  return (
    <CategoryWrapper>
      <Label {...INPUT.category} />
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
