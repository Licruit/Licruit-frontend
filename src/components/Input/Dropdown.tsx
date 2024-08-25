import { forwardRef, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Controller, useFormContext } from 'react-hook-form';
import { DownArrowIcon } from 'public/assets/icons';
import { useClickOutside } from '@/hooks/gesture/useClickOutside';

export interface DropdownItem {
  id: number;
  name: string;
}

interface Props {
  options?: DropdownItem[] | string[];
  placeholder?: string;
  name: string;
}

const Dropdown = forwardRef<HTMLDivElement, Props>(
  ({ options, placeholder, name }) => {
    const [selectedOption, setSelectedOption] = useState(placeholder);
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const { setValue, watch } = useFormContext();

    const selectedValue = watch(name);

    const handleSelect = (option: DropdownItem | string) => {
      if (typeof option === 'string') {
        setValue(name, option, { shouldValidate: true });
        setSelectedOption(option);
      } else {
        setValue(name, option.id, { shouldValidate: true });
        setSelectedOption(option.name);
      }
      setIsOpen(false);
    };

    const industryRef = useRef<HTMLDivElement>(null);

    useClickOutside(industryRef, () => setIsOpen(false));

    return (
      <DropdownContainer ref={industryRef}>
        <Controller
          name={name}
          rules={{ required: placeholder }}
          render={() => (
            <>
              <DropdownHeader
                $isSelected={selectedValue !== undefined}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <div className='select-input'>
                  {selectedOption ?? placeholder}
                  <DownArrowIcon fill={theme.color.neutral[400]} />
                </div>
              </DropdownHeader>
              {isOpen && (
                <DropdownList>
                  {options?.map((option) => (
                    <DropdownItem
                      key={typeof option === 'object' ? option.id : option}
                      onClick={() => handleSelect(option)}
                    >
                      {typeof option === 'object' ? option.name : option}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </>
          )}
        />
      </DropdownContainer>
    );
  }
);

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;

  .select-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const DropdownHeader = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  padding: 18px;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.neutral[800] : theme.color.neutral[400]};
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]};
`;

const DropdownList = styled.ul`
  position: absolute;
  z-index: 1000;

  overflow-y: auto;

  width: 100%;
  max-height: 200px;

  color: ${({ theme }) => theme.color.neutral[300]};

  background-color: ${({ theme }) => theme.color.common[100]};
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  border-top: none;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  padding: 18px;
  ${({ theme }) => theme.typo.body.medium[12]}

  &:hover {
    color: ${({ theme }) => theme.color.neutral[400]};
    background-color: ${({ theme }) => theme.color.neutral[100]};
  }
`;
