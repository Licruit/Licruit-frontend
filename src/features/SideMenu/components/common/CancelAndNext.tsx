import Button from '@/components/Button/Button';
import styled from 'styled-components';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';

interface Props {
  isValid: boolean;
  type?: 'submit' | 'button';
  onNext?: () => void;
}

function CancelAndNext({ isValid, type = 'button', onNext }: Props) {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  return (
    <ButtonContainer>
      <Button
        $style='solid'
        $size='md'
        $theme='primary'
        $width='full'
        onClick={() => setContent('my-page')}
      >
        취소
      </Button>
      <Button
        disabled={!isValid}
        onClick={onNext}
        $style='outlined'
        $theme='primary'
        $size='md'
        $width='full'
        type={type}
      >
        다음
      </Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export default CancelAndNext;
