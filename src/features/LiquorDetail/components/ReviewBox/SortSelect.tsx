import { DownArrowIcon } from 'public/assets/icons';
import { useState } from 'react';
import styled from 'styled-components';

function SortSelect() {
  const [selected, setSelected] = useState('높은 순');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectBox type='button' onClick={() => setIsOpen((prev) => !prev)}>
      {selected} <DownArrowIcon fill='#ADAEB1' />
      {isOpen && (
        <OptionBox>
          <button
            className='option'
            type='button'
            onClick={() => setSelected('높은 순')}
          >
            높은 순
          </button>
          <button
            className='option'
            type='button'
            onClick={() => setSelected('낮은 순')}
          >
            낮은 순
          </button>
        </OptionBox>
      )}
    </SelectBox>
  );
}

export default SortSelect;

const SelectBox = styled.button`
  position: relative;

  display: flex;
  gap: 18px;
  align-items: center;

  width: fit-content;
  padding: 8px 12px;

  ${({ theme }) => theme.typo.body.medium[14]}
  color: ${({ theme }) => theme.color.neutral[400]};

  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
`;

const OptionBox = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;

  background-color: ${({ theme }) => theme.color.common[100]};
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
  border-top: 0;

  .option {
    padding: 8px 12px;
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;
