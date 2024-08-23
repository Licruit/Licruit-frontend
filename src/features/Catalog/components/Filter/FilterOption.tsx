import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { CheckIcon, DownArrowIcon } from 'public/assets/icons';

interface FilterOptionProps {
  title: string;
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
}

function FilterOption({
  title,
  options,
  selectedOption,
  onSelectOption,
}: FilterOptionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <List>
      <SubTitle onClick={handleToggle}>
        {title}
        {isOpen ? (
          <DownArrowIcon
            fill={theme.color.neutral[400]}
            style={{ transform: 'rotate(180deg)' }}
          />
        ) : (
          <DownArrowIcon fill={theme.color.neutral[400]} />
        )}
      </SubTitle>
      <Content $isOpen={isOpen}>
        <ul>
          {options.map((option) => {
            const isSelected = option === selectedOption;
            return (
              <Item
                key={option}
                $isSelected={isSelected}
                onClick={() => onSelectOption(option)}
              >
                {option}
                {isSelected && (
                  <CheckIcon
                    fill={theme.color.primary[500]}
                    width={18}
                    style={{ marginRight: '20px' }}
                  />
                )}
              </Item>
            );
          })}
        </ul>
      </Content>
    </List>
  );
}

export default FilterOption;

const List = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;

const SubTitle = styled.li`
  cursor: pointer;

  display: flex;
  justify-content: space-between;

  padding: 21px 20px 21px 0;

  ${({ theme }) => theme.typo.heading.bold[16]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const Content = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const Item = styled.li<{ $isSelected: boolean }>`
  cursor: pointer;

  display: flex;
  justify-content: space-between;

  padding: 21px 0;

  ${({ theme }) => theme.typo.body.semi_bold[12]};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.color.primary[500] : theme.color.neutral[900]};

  border-top: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;
