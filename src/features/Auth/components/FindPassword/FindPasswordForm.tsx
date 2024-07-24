import Button from '@/components/Button/Button';
import FormButton from '@/components/Button/FormButton';
import MultiStep from '@/components/Form/MultiStep';
import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function FindPasswordForm({ step, setStep }: Props) {
  return (
    <Container>
      <MultiStep current={step} maxStep={2} />
      <div className='input-wrapper'>
        <FormInput type='number' placeholder='사업자 등록번호를 입력해주세요' />
        <InputWithButton>
          <FormInput type='tel' placeholder='전화번호를 입력해주세요' />
          <Button buttonStyle='outlined' size='lg' theme='primary'>
            인증요청
          </Button>
        </InputWithButton>
        <FormInput type='number' placeholder='인증번호' />
      </div>
      <FormButton
        type='button'
        buttonText='다음'
        onClick={() => setStep((prev) => prev + 1)}
      />
    </Container>
  );
}

export default FindPasswordForm;

const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const InputWithButton = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
