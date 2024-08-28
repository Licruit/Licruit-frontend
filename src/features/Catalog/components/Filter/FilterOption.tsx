import { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { CheckIcon, DownArrowIcon } from 'public/assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const contentRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    searchParams.delete('page');

    if (title === '도수') {
      const [min, max] = option.match(/\d+/g)?.map(Number) || [];
      searchParams.set('minAlcohol', min.toString());
      searchParams.set('maxAlcohol', max.toString());
    } else if (title === '평점') {
      searchParams.set('rating', option);
    }

    onSelectOption(option);

    navigate({ search: searchParams.toString() });
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
      <Content ref={contentRef} $isOpen={isOpen}>
        <ul>
          {options.map((option) => {
            const isSelected = option === selectedOption;
            return (
              <Item
                key={option}
                $isSelected={isSelected}
                onClick={() => handleOptionSelect(option)}
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
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '300px' : '0')};
  transition: max-height 0.3s ease-out;
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
