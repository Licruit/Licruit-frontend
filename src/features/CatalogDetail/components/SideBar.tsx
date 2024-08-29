import styled, { useTheme } from 'styled-components';
import { SidebarContainer } from '@/styles/components/SideBar';
import { CheckIcon, WavingIcon } from 'public/assets/icons';
import GlobalErrorBoundary from '@/layouts/GlobalErrorBoundary';
import Button from '@/components/Button/Button';
import { useParams } from 'react-router-dom';
import { useLiquorDetail } from '@/features/LiquorDetail';
import GroupBuyingList from './GroupBuyingList/GroupBuyingList';
import { useRegister } from '../hooks/useRegister';

function SideBar() {
  const theme = useTheme();
  const { id: liquorId } = useParams();
  const { liquorDetail } = useLiquorDetail(Number(liquorId));
  const { handleRegister } = useRegister(Number(liquorId));

  if (!liquorDetail) return null;

  const { name, liked, likes } = liquorDetail;

  return (
    <Container>
      <h1 className='liquor-name'>{name}</h1>
      <GlobalErrorBoundary size='md'>
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
            <WavingIcon
              fill={theme.color.primary[500]}
              width={18}
              height={18}
            />
          )}
          {liked ? '구매 신청완료' : '구매 신청하기'} (현재 {likes}명
          신청했어요!)
        </Button>
      </GlobalErrorBoundary>
    </Container>
  );
}

export default SideBar;

const Container = styled(SidebarContainer)`
  .liquor-name {
    ${({ theme }) => theme.typo.heading.bold[36]}
  }
`;
