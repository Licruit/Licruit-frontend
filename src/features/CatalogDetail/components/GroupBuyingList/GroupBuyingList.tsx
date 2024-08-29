import styled from 'styled-components';
import GroupBuyingListItem from './GroupBuyingListItem';
import { useCurrentBuyings } from '../../hooks/useCurrentBuyings';

function GroupBuyingList() {
  const { buyings, totalBuyings } = useCurrentBuyings();

  return (
    <Container>
      <StatusBar>
        <div className='dot' />
        {totalBuyings === 0
          ? '현재 진행되는 공동구매는 없습니다.'
          : `현재 ${totalBuyings}개의 공동구매가 진행 중입니다.`}
      </StatusBar>
      <div className='list-wrapper'>
        {buyings.map((item) => (
          <GroupBuyingListItem key={item.id} buyingData={item} />
        ))}
      </div>
    </Container>
  );
}

export default GroupBuyingList;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 10px;
  margin-bottom: 48px;

  .list-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

const StatusBar = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  padding: 10px 0;

  color: ${({ theme }) => theme.color.primary[500]};

  border: 1px solid ${({ theme }) => theme.color.neutral[900]};
  border-right: 0;
  border-left: 0;

  ${({ theme }) => theme.typo.heading.bold[16]}

  .dot {
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.color.primary[500]};
  }
`;
