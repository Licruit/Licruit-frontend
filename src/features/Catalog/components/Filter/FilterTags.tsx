import Button from '@/components/Button/Button';
import styled, { useTheme } from 'styled-components';
import { CloseIcon } from 'public/assets/icons';

interface Props {
  selectAlcohol: (filter: string) => void;
  selectedAlcohol: string | null;
  selectRating: (filter: string) => void;
  selectedRating: string | null;
  clearFilter: () => void;
}
function FilterTags({
  selectedAlcohol,
  selectAlcohol,
  selectedRating,
  selectRating,
  clearFilter,
}: Props) {
  const theme = useTheme();

  const hasFilters = selectedAlcohol || selectedRating;

  const renderFilterButton = (label: string, onClick: () => void) => (
    <Button $style='outlined' $size='sm' $theme='primary'>
      {label}
      <CloseIcon
        fill={theme.color.primary[500]}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    </Button>
  );

  return (
    <>
      {hasFilters && (
        <Container>
          <Button
            type='button'
            $style='outlined'
            $size='sm'
            $theme='neutral'
            onClick={clearFilter}
          >
            초기화
          </Button>
          {selectedAlcohol &&
            renderFilterButton(selectedAlcohol, () =>
              selectAlcohol(selectedAlcohol)
            )}
          {selectedRating &&
            renderFilterButton(selectedRating, () =>
              selectRating(selectedRating)
            )}
        </Container>
      )}
    </>
  );
}

export default FilterTags;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;
