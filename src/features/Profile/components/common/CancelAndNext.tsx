import Button from '@/components/Button/Button';
import styled from 'styled-components';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import NextButton from './NextButton';

interface Props {
  isValid: boolean;
  onNext: () => void;
}

function CancelAndNext({ isValid, onNext }: Props) {
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
      <NextButton isValid={isValid} onNext={onNext} />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export default CancelAndNext;
