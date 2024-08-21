import styled from 'styled-components';

import { useFilter } from '../../hooks/useFilter';
import FilterTags from './FilterTags';
import FilterOption from './FilterOption';

function Filter() {
  const {
    selectAlcohol,
    selectedAlcohol,
    selectRating,
    selectedRating,
    clearFilter,
  } = useFilter();

  return (
    <>
      <FilterBox>
        <Title>필터</Title>
        <FilterTags
          selectAlcohol={selectAlcohol}
          selectedAlcohol={selectedAlcohol}
          selectRating={selectRating}
          selectedRating={selectedRating}
          clearFilter={clearFilter}
        />
      </FilterBox>

      <ul>
        <FilterOption
          title='도수'
          options={['1~9%', '10~19%', '20~29%', '30~39%', '40~60%']}
          selectedOption={selectedAlcohol}
          onSelectOption={selectAlcohol}
        />
        <FilterOption
          title='평점'
          options={['높은순', '낮은순']}
          selectedOption={selectedRating}
          onSelectOption={selectRating}
        />
      </ul>
    </>
  );
}

export default Filter;

const FilterBox = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[20]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;
