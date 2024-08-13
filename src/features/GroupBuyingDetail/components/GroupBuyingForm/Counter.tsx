import { AddIcon, RemoveIcon } from 'public/assets/icons';
import { ChangeEvent, useState } from 'react';
import styled, { useTheme } from 'styled-components';

function Counter() {
  const theme = useTheme();
  const [count, setCount] = useState(1);

  const handleClick = (num: number) => {
    if (count + num < 1) {
      return;
    }
    setCount((prev) => prev + num);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCount(value < 1 ? 1 : value);
  };

  return (
    <Container>
      <ActionButton type='button' onClick={() => handleClick(-1)}>
        <RemoveIcon fill={theme.color.neutral[600]} />
      </ActionButton>
      <CountInput type='number' value={count} onChange={handleChange} />
      <ActionButton type='button' onClick={() => handleClick(1)}>
        <AddIcon fill={theme.color.neutral[600]} />
      </ActionButton>
    </Container>
  );
}

export default Counter;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  background-color: ${({ theme }) => theme.color.common[100]};
  ${({ theme }) => theme.typo.body.medium[14]}
`;

const CountInput = styled.input`
  width: 50px;
  border: none;
  text-align: center;
  outline: none;
`;

const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.color.primary[500]};
    }
  }
`;
