import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { DownArrowIcon } from 'public/assets/icons';
import { FILTER } from '../constants/filter';

function Filter() {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({
    alcohol: false,
    price: false,
    rating: false,
  });
  const theme = useTheme();

  const handleToggle = (option: string) => {
    setSelected((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <Container>
      <Title>필터</Title>
      <ul>
        {Object.values(FILTER).map((item) => {
          return (
            <List>
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
                    return <Item key={value}>{value} </Item>;
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
  padding: 21px 0;
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
