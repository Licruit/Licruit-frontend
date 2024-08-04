import { useState } from 'react';
import { TAB } from '@/constants/category';

import styled from 'styled-components';
import Button from '../Button/Button';

type TabTypeKey = keyof typeof TAB;

interface TabProps {
  type: TabTypeKey;
}

function Tab({ type }: TabProps) {
  const tabs = Object.values(TAB[type]);
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  const handleClickButton = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <Button
          key={tab}
          type='button'
          $theme={selectedTab === tab ? 'primary' : 'neutral'}
          $style='outlined'
          $size='sm'
          onClick={() => handleClickButton(tab)}
        >
          {tab}
        </Button>
      ))}
    </TabContainer>
  );
}

export default Tab;

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
