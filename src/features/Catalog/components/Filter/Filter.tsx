import styled from 'styled-components';

import { useFilter } from '../../hooks/useFilter';
import FilterTags from './FilterTags';
import FilterOption from './FilterOption';
import { FILTER } from '../../constants/filter';

function Filter() {
  const {
    selectAlcohol,
    selectedAlcohol,
    selectRating,
    selectedRating,
    clearFilter,
  } = useFilter();

  const filterProps = {
    selectAlcohol,
    selectedAlcohol,
    selectRating,
    selectedRating,
    clearFilter,
  };

  return (
    <>
      <FilterBox>
        <Title>필터</Title>
        <FilterTags {...filterProps} />
      </FilterBox>

      <ul>
        <FilterOption
          title={FILTER.alcohol.title}
          options={FILTER.alcohol.values}
          selectedOption={selectedAlcohol}
          onSelectOption={selectAlcohol}
        />
        <FilterOption
          title={FILTER.rating.title}
          options={FILTER.rating.values}
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
