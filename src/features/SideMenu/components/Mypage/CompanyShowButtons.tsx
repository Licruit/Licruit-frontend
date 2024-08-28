import Button from '@/components/Button/Button';
import PATH from '@/constants/path';
import useClickToNavigate from '@/features/Main/hooks/useClickToNavigate';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import styled from 'styled-components';

function CompanyShowButtons() {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);
  const { handleClickToNavigate } = useClickToNavigate();

  return (
    <ButtonContainer>
      <Button
        $style='solid'
        $size='md'
        $theme='primary'
        $width='full'
        style={{ justifyContent: 'left' }}
        onClick={() => setContent('group-buying')}
      >
        공동구매 올리기
      </Button>
      <Button
        $style='outlined'
        $size='md'
        $theme='primary'
        $width='full'
        style={{ justifyContent: 'left' }}
        onClick={() => handleClickToNavigate(PATH.management)}
      >
        공동구매 목록
      </Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default CompanyShowButtons;
