import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { CheckIcon, DownArrowIcon } from 'public/assets/icons';
import { FILTER } from '../../constants/filter';
import { useFilter } from '../../hooks/useFilter';
import FilterTags from './FilterTags';

function Filter() {
  const {
    selectAlcohol,
    selectedAlcohol,
    selectRating,
    selectedRating,
    clearFilter,
  } = useFilter();

  const [selected, setSelected] = useState<{ [key: string]: boolean }>({
    alcohol: false,
    rating: false,
  });
  const theme = useTheme();
  const handleToggle = (option: string) => {
    setSelected((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <>
      <FilterBox>
        <Title>필터</Title>
        <FilterTags
          selectAlcohol={selectAlcohol}
          selectedAlcohol={selectedAlcohol}
          selectRating={selectRating}
          selectedRating={selectedRating}
          clearFilter={clearFilter}
        />
      </FilterBox>

      <ul>
        {Object.values(FILTER).map((item) => {
          return (
            <List key={item.title}>
              <SubTitle
                key={item.title}
                onClick={() => handleToggle(item.title)}
              >
                {item.title}
                {selected[item.title] ? (
                  <DownArrowIcon
                    fill={theme.color.neutral[400]}
                    style={{ transform: 'rotate(180deg)' }}
                  />
                ) : (
                  <DownArrowIcon fill={theme.color.neutral[400]} />
                )}
              </SubTitle>
              <Content $isOpen={selected[item.title]}>
                <ul>
                  {item.values.map((value) => {
                    return (
                      <Item
                        key={value}
                        $isSelected={
                          value === selectedAlcohol || value === selectedRating
                        }
                        onClick={() => {
                          if (item.title === '도수') {
                            selectAlcohol(value);
                          }
                          if (item.title === '평점') {
                            selectRating(value);
                          }
                        }}
                      >
                        {value}
                        {(value === selectedAlcohol ||
                          value === selectedRating) && (
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
        })}
      </ul>
    </>
  );
}

export default Filter;

const FilterBox = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[20]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const List = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;

const SubTitle = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 21px 20px 21px 0;
  ${({ theme }) => theme.typo.heading.bold[16]};
  color: ${({ theme }) => theme.color.neutral[900]};
  cursor: pointer;
`;

const Content = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const Item = styled.li<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
  ${({ theme }) => theme.typo.body.semi_bold[12]};
  border-top: 1px solid ${({ theme }) => theme.color.neutral[400]};
  cursor: pointer;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.color.primary[500] : theme.color.neutral[900]};
`;
