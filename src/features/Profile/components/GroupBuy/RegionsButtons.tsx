import styled from 'styled-components';
import Button from '@/components/Button/Button';
import { forwardRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { INPUT } from '../../constants/input';
import Label from '../common/Label';
import { LOCATION } from '../../constants/location';

const RegionsButtons = forwardRef(() => {
  const { setValue } = useFormContext();
  const selected = useWatch({ name: 'regions', defaultValue: [] });

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
        {LOCATION.map((location) => (
          <Button
            key={location}
            $style='outlined'
            $theme={selected.includes(location) ? 'primary' : 'neutral'}
            $size='sm'
            $transparent
            type='button'
            onClick={(event) => handleClickButton(event)}
          >
            {location}
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
