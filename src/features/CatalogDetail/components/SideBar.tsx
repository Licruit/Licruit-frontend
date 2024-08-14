import styled, { useTheme } from 'styled-components';
import { CheckIcon, WavingIcon } from 'public/assets/icons';
import Button from '@/components/Button/Button';
import GroupBuyingList from './GroupBuyingList/GroupBuyingList';
import { useLiquorDetail } from '../hooks/useLiquorDetail';
import { useRegister } from '../hooks/useRegister';

function SideBar() {
  const theme = useTheme();
  const { liquorDetail } = useLiquorDetail();
  const { handleRegister } = useRegister();

  if (!liquorDetail) return null;

  const { name, liked, likes } = liquorDetail;

  return (
    <Container>
      <h1 className='liquor-name'>{name}</h1>
      <GroupBuyingList />
      <Button
        $theme='primary'
        $style={liked ? 'solid' : 'outlined'}
        $size='lg'
        $width='full'
        $disableHover={!!liked}
        onClick={() => handleRegister(!!liked)}
      >
        {liked ? (
          <CheckIcon fill={theme.color.common[100]} width={18} height={18} />
        ) : (
          <WavingIcon fill={theme.color.primary[500]} width={18} height={18} />
        )}
        {liked ? '구매 신청완료' : '구매 신청하기'} (현재 {likes}명 신청했어요!)
      </Button>
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  position: sticky;
  top: 75px;

  display: flex;
  flex-direction: column;

  height: fit-content;

  .liquor-name {
    ${({ theme }) => theme.typo.heading.bold[36]}
  }
`;
