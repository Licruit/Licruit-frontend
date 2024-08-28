import styled from 'styled-components';
import Button from '@/components/Button/Button';
import { forwardRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useRegion } from '@/features/GroupBuying/hooks/useRegion';
import { INPUT } from '../../constants/input';
import Label from '../common/Label';

const RegionsButtons = forwardRef(() => {
  const { setValue } = useFormContext();
  const selected = useWatch({ name: 'regions', defaultValue: [] });
  const { regionData } = useRegion();

  if (!regionData) return <></>;

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const region = event.currentTarget.innerText;

    const updatedRegions = selected.includes(region)
      ? selected.filter((item: string) => item !== region)
      : [...selected, region];

    setValue('regions', updatedRegions, { shouldValidate: true });
  };
  return (
    <CategoryWrapper>
      <Label {...INPUT.location} extraDesc />
      <CategoryButtonWrapper>
        {regionData.map((location) => (
          <Button
            key={location.id}
            $style='outlined'
            $theme={selected.includes(location.name) ? 'primary' : 'neutral'}
            $size='sm'
            $transparent
            type='button'
            onClick={(event) => handleClickButton(event)}
          >
            {location.name}
          </Button>
        ))}
      </CategoryButtonWrapper>
    </CategoryWrapper>
  );
});

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

export default RegionsButtons;
