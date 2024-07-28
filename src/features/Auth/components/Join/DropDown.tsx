import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ICONS } from '@/constants/icons';
import { KSIC } from '../../types/signup';

interface Props {
  options?: KSIC[];
  placeholder?: string;
}

function DropDown({ options, placeholder }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<KSIC | null>(null);
  const modalRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // 클릭 이벤트 핸들러 정의
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: KSIC) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        <div className='dropdown_input'>
          {selectedOption?.name ? selectedOption.name : placeholder}{' '}
          <img src={ICONS.down_arrow} alt='down-arrow' />
        </div>
      </DropdownHeader>
      {isOpen && (
        <DropdownList ref={modalRef}>
          {options?.map((option) => (
            <DropdownItem key={option.id} onClick={() => handleSelect(option)}>
              {option.name}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

export default DropDown;

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  .dropdown_input {
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
