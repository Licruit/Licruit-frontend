import { forwardRef, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { KSIC } from '@/features/Join/types/signup';
import { useFormContext } from 'react-hook-form';
import { DownArrowIcon } from 'public/assets/icons';
import { useClickOutside } from '@/hooks/gesture/useClickOutside';

interface Props {
  options?: KSIC[] | string[];
  placeholder?: string;
}

const FormSelect = forwardRef<HTMLDivElement, Props>(
  ({ options, placeholder }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const selectRef = useRef<HTMLUListElement>(null);
    const theme = useTheme();
    const { setValue } = useFormContext();

    const handleSelect = (option: KSIC | string) => {
      if (typeof option === 'string') {
        setSelectedOption(option);
        setValue('reason', option, { shouldValidate: true });
      } else {
        setSelectedOption(option.name);
        setValue('sectorId', option?.id, { shouldValidate: true });
      }
      setIsOpen(false);
    };

    const industryRef = useRef<HTMLDivElement>(null);

    useClickOutside(industryRef, () => setIsOpen(false));

    return (
      <Wrapper ref={industryRef}>
        <Select
          onClick={() => setIsOpen((prev) => !prev)}
          ref={ref}
          $isSelected={selectedOption}
        >
          <div className='selectInput'>
            {selectedOption ?? placeholder}
            <DownArrowIcon fill={theme.color.neutral[400]} />
          </div>
        </Select>
        {isOpen && (
          <SelectList ref={selectRef}>
            {options?.map((option) => (
              <SelectItem
                key={typeof option === 'object' ? option.id : option}
                onClick={() => handleSelect(option)}
              >
                {typeof option === 'object' ? option.name : option}
              </SelectItem>
            ))}
          </SelectList>
        )}
      </Wrapper>
    );
  }
);

export default FormSelect;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .selectInput {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Select = styled.div<{ $isSelected: string | null }>`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme, $isSelected }) => {
    if ($isSelected) return theme.color.neutral[900];
    return theme.color.neutral[400];
  }};
  cursor: pointer;
`;

const SelectList = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.color.common[100]};
  color: ${({ theme }) => theme.color.neutral[300]};
  z-index: 1000;
`;

const SelectItem = styled.li`
  padding: 18px;
  ${({ theme }) => theme.typo.body.medium[12]}
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.neutral[400]};
    background-color: ${({ theme }) => theme.color.neutral[100]};
  }
`;
