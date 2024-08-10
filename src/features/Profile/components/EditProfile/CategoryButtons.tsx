import Button from '@/components/Button/Button';
import styled from 'styled-components';
import { useState } from 'react';
import Label from '../common/Label';
import { INPUT } from '../../constants/input';

interface Props {
  categories: string[];
  value: string;
  onSetCategory: (value: number) => void;
}

// TODO 서버 데이터로 변경하기

function CategoryButtons({ categories, value, onSetCategory }: Props) {
  const [selected, setSelected] = useState(value);

  return (
    <CategoryWrapper>
      <Label {...INPUT.category} />
      <CategoryButtonWrapper>
        {categories.map((item, index) => {
          return (
            <Button
              key={item}
              $style='outlined'
              $theme={item === selected ? 'primary' : 'neutral'}
              $size='sm'
              $transparent
              type='button'
              onClick={() => {
                setSelected(item);
                onSetCategory(index + 1);
              }}
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
