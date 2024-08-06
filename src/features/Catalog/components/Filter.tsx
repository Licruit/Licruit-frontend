import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { DownArrowIcon } from 'public/assets/icons';
import { FILTER } from '../constants/filter';

function Filter() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({
    alcohol: false,
    rating: false,
  });
  const theme = useTheme();
  const navigate = useNavigate();
  const handleToggle = (option: string) => {
    setSelected((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const extractNumbers = (str: string) => {
    const match = str.match(/\d+/g);
    return match ? match.map(Number) : [];
  };

  return (
    <Container>
      <Title>필터</Title>
      <ul>
        {Object.values(FILTER).map((item) => {
          return (
            <List key={item.title}>
              <SubTitle
                key={item.title}
                onClick={() => handleToggle(item.title)}
              >
                {item.title}
                <DownArrowIcon fill={theme.color.neutral[400]} />
              </SubTitle>
              <Content $isOpen={selected[item.title]}>
                <ul>
                  {item.values.map((value) => {
                    let min: number;
                    let max: number;
                    if (item.title === '도수') {
                      [min, max] = extractNumbers(value);
                    }
                    return (
                      <Item
                        key={value}
                        onClick={() => {
                          if (item.title === '도수') {
                            searchParams.set('min_alcohol', min.toString());
                            searchParams.set('max_alcohol', max.toString());
                          }
                          navigate(`/catalog?${searchParams.toString()}`);
                        }}
                      >
                        {value}
                      </Item>
                    );
                  })}
                </ul>
              </Content>
            </List>
          );
        })}
      </ul>
    </Container>
  );
}

export default Filter;

const Container = styled.div``;

const Title = styled.div`
  padding: 20px 0;
  ${({ theme }) => theme.typo.heading.bold[20]};
  color: ${({ theme }) => theme.color.neutral[900]};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
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

const Item = styled.li`
  padding: 21px 0;
  ${({ theme }) => theme.typo.body.semi_bold[12]};
  border-top: 1px solid ${({ theme }) => theme.color.neutral[400]};
  cursor: pointer;
`;
