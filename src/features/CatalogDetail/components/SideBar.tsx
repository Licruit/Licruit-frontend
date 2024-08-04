import styled from 'styled-components';
import { WavingIcon } from 'public/assets/icons';
import Button from '@/components/Button/Button';
import GroupBuyingList from './GroupBuyingList/GroupBuyingList';
import { useLiquorDetail } from '../hooks/useLiquorDetail';
import { useRegister } from '../hooks/useRegister';

function SideBar() {
  const { liquorDetail } = useLiquorDetail();
  const { handleRegister } = useRegister();

  if (!liquorDetail) return null;

  const { name, liked } = liquorDetail;

  return (
    <Container>
      <h1 className='liquor-name'>{name}</h1>
      <GroupBuyingList />
      <Button
        $theme='primary'
        $style='solid'
        $size='lg'
        $width='full'
        $disableHover={!!liked}
        onClick={() => handleRegister(!!liked)}
      >
        {liked ? (
          '구매 신청 완료!'
        ) : (
          <>
            <WavingIcon fill='#FFFFFF' width={18} height={18} />
            구매 신청하기 (현재 {liquorDetail.likes}명 신청했어요!)
          </>
        )}
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
