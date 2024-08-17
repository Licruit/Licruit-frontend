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
  display: flex;
  flex-direction: column;

  width: 100%;
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
