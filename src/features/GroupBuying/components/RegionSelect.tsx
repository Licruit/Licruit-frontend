import { DownArrowIcon } from 'public/assets/icons';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

interface Props {
  data?: { id: number; name: string }[];
}
function RegionSelect({ data = [] }: Props) {
  const [selectedValue, setSelectedValue] = useState('전체');
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const regions = [{ id: 0, name: '전체' }, ...data];

  const handleSelectOption = (optionId: number, optionName: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());

    if (optionName === '전체') {
      updatedParams.delete('region');
    } else {
      updatedParams.set('region', optionId.toString());
    }
    setSelectedValue(optionName);
    setIsOpen(false);
    navigate(`?${updatedParams.toString()}`, { replace: true });
  };

  return (
    <Container>
      <SelectBox type='button' onClick={() => setIsOpen((prev) => !prev)}>
        {selectedValue ?? '전체'}
        <DownArrowIcon fill={theme.color.neutral[400]} />
      </SelectBox>
      {isOpen && (
        <OptionBox>
          {regions.map((item) => {
            return (
              <button
                key={item.id}
                className='option'
                type='button'
                onClick={() => handleSelectOption(item.id, item.name)}
              >
                {item.name}
              </button>
            );
          })}
        </OptionBox>
      )}
    </Container>
  );
}

export default RegionSelect;

const Container = styled.div`
  position: relative;
`;

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
  z-index: 999;
  top: 100%;
  left: 0;

  width: 100%;

  background-color: ${({ theme }) => theme.color.common[100]};
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
  border-top: 0;

  .option {
    width: 100%;
    padding: 8px 12px;
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.neutral[400]};
    text-align: left;
  }
`;
