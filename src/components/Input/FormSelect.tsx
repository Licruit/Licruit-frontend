import { forwardRef, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { KSIC } from '@/features/Join/types/signup';
import { useFormContext } from 'react-hook-form';
import { DownArrowIcon } from 'public/assets/icons';
import { useClickOutside } from '@/hooks/gesture/useClickOutside';

interface Props {
  options?: KSIC[];
  placeholder?: string;
}

const FormSelect = forwardRef<HTMLDivElement, Props>(
  ({ options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const theme = useTheme();
    const { setValue, trigger } = useFormContext();

    const handleSelect = (option: KSIC) => {
      setSelectedOption(option.name);
      trigger('sectorId');
      setValue('sectorId', option.id, { shouldValidate: true });
      setIsOpen(false);
    };

    const industryRef = useRef<HTMLDivElement>(null);

    useClickOutside(industryRef, () => setIsOpen(false));

    return (
      <DropdownContainer ref={industryRef}>
        <DropdownHeader onClick={() => setIsOpen((prev) => !prev)}>
          <div className='selectInput'>
            {selectedOption ?? placeholder}
            <DownArrowIcon fill={theme.color.neutral[400]} />
          </div>
        </DropdownHeader>
        {isOpen && (
          <DropdownList>
            {options?.map((option) => (
              <DropdownItem
                key={option.id}
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    );
  }
);

export default FormSelect;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  .selectInput {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const DropdownHeader = styled.div`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
  cursor: pointer;
`;

const DropdownList = styled.ul`
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

const DropdownItem = styled.li`
  padding: 18px;
  ${({ theme }) => theme.typo.body.medium[12]}
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.neutral[400]};
    background-color: ${({ theme }) => theme.color.neutral[100]};
  }
`;
