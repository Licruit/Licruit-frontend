import { TAB } from '@/constants/tab';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

type TabTypeKey = keyof typeof TAB;

interface TabProps {
  type: TabTypeKey;
  queryKey: string;
}

function Tab({ type, queryKey }: TabProps) {
  const tabs = Object.entries(TAB[type]);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTab = searchParams.get(queryKey) || tabs[0][0];

  const handleClickButton = (tab: string) => {
    setSearchParams({ [queryKey]: tab });
  };

  return (
    <TabContainer>
      {tabs.map(([key, value]) => (
        <Button
          key={key}
          type='button'
          $theme={selectedTab === key ? 'primary' : 'neutral'}
          $style='outlined'
          $size='sm'
          onClick={() => handleClickButton(key)}
        >
          {value}
        </Button>
      ))}
    </TabContainer>
  );
}

export default Tab;

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
`;
