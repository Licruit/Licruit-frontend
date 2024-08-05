import Button from '@/components/Button/Button';
import styled from 'styled-components';
import Label from '../common/Label';
import { LABEL } from '../../constants/label';

const category = [
  '한식',
  '일식',
  '양식',
  '중식',
  '이자카야',
  '요리주점',
  '레스토랑',
  '도매업체',
  '기타',
];

function CategoryButtons() {
  return (
    <CategoryWrapper>
      <Label label={LABEL.category} isRequired />
      <CategoryButtonWrapper>
        {category.map((item) => {
          return (
            <Button $style='outlined' $theme='neutral' $size='sm' $transparent>
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
