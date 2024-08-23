import { DownArrowIcon } from 'public/assets/icons';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

function SortSelect() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSort = searchParams.get('sort');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: 0 | 1) => {
    setIsOpen(false);
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set('sort', option.toString());
    navigate(`?${updatedParams.toString()}`, { replace: true });
  };

  return (
    <SelectBox type='button' onClick={() => setIsOpen((prev) => !prev)}>
      {currentSort === '1' ? '낮은 순' : '높은 순'}{' '}
      <DownArrowIcon fill={theme.color.neutral[400]} />
      {isOpen && (
        <OptionBox>
          <button
            className='option'
            type='button'
            onClick={() => handleSelectOption(0)}
          >
            높은 순
          </button>
          <button
            className='option'
            type='button'
            onClick={() => handleSelectOption(1)}
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
