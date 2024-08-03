import styled from 'styled-components';
import { WavingIcon } from 'public/assets/icons';
import Button from '@/components/Button/Button';
import GroupBuyingList from './GroupBuyingList/GroupBuyingList';

function SideBar() {
  return (
    <Container>
      <h1 className='liquor-name'>백경 13. 화이트</h1>
      <GroupBuyingList />
      <Button $theme='primary' $style='solid' $size='lg' $width='full'>
        <WavingIcon fill='#FFFFFF' width={18} height={18} />
        구매 신청하기 (현재 230명 신청했어요!)
      </Button>
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  height: fit-content;
  display: flex;
  flex-direction: column;

  position: sticky;
  position: -webkit-sticky;
  top: 75px;

  .liquor-name {
    ${({ theme }) => theme.typo.heading.bold[36]}
  }
`;
