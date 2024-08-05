import styled from 'styled-components';
import GroupBuyingListItem from './GroupBuyingListItem';

function GroupBuyingList() {
  return (
    <Container>
      <StatusBar>
        <div className='dot' />
        현재 진행되는 공동구매는 없습니다.
      </StatusBar>
      <div className='list-wrapper'>
        <GroupBuyingListItem />
        <GroupBuyingListItem />
        <GroupBuyingListItem />
      </div>
    </Container>
  );
}

export default GroupBuyingList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 48px;

  .list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const StatusBar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 0;
  border: 1px solid ${({ theme }) => theme.color.neutral[900]};
  border-left: 0;
  border-right: 0;
  color: ${({ theme }) => theme.color.primary[500]};
  ${({ theme }) => theme.typo.heading.bold[16]}

  .dot {
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.color.primary[500]};
  }
`;
