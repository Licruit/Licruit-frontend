import { clamp } from '@/utils/clamp';
import { AddIcon, RemoveIcon } from 'public/assets/icons';
import { ChangeEvent } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import styled, { useTheme } from 'styled-components';

interface Props {
  remainedQuantity: number | null;
}

function Counter({ remainedQuantity }: Props) {
  const theme = useTheme();
  const isOver = Boolean(remainedQuantity && remainedQuantity <= 0);
  const { setValue } = useFormContext();
  const quantity = useWatch({ name: 'quantity' });

  const handleClick = (num: number) => {
    if (isOver) return;

    if (quantity + num < 1) {
      return;
    }
    setValue('quantity', quantity + num);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setValue('quantity', clamp(value, 1, remainedQuantity || undefined));
  };

  return (
    <Container>
      <ActionButton
        type='button'
        $isDisabled={isOver}
        onClick={() => handleClick(-1)}
      >
        <RemoveIcon
          fill={isOver ? theme.color.neutral[400] : theme.color.neutral[600]}
        />
      </ActionButton>
      <CountInput
        type='number'
        value={quantity}
        disabled={isOver}
        onChange={handleChange}
      />
      <ActionButton
        type='button'
        $isDisabled={isOver}
        onClick={() => handleClick(1)}
      >
        <AddIcon
          fill={isOver ? theme.color.neutral[400] : theme.color.neutral[600]}
        />
      </ActionButton>
    </Container>
  );
}

export default Counter;

const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 10px 16px;

  background-color: ${({ theme }) => theme.color.common[100]};
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]}
`;

const CountInput = styled.input`
  width: 50px;
  text-align: center;
  border: none;

  &:disabled {
    color: ${({ theme }) => theme.color.neutral[400]};
    background-color: ${({ theme }) => theme.color.common[100]};
  }
`;

const ActionButton = styled.button<{ $isDisabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'default' : 'pointer')};

  &:hover(:not($isDisabled)) {
    svg {
      fill: ${({ theme }) => theme.color.primary[500]};
    }
  }
`;
