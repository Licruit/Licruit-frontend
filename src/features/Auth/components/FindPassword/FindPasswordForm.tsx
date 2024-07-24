import FormButton from '@/components/Button/FormButton';
import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';
import MultiStep from '../common/MultiStep';
import AuthForm from '../common/AuthForm';
import PasswordForm from '../common/PasswordForm';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function FindPasswordForm({ step, setStep }: Props) {
  return (
    <Container>
      <MultiStep current={step} maxStep={2} />
      {step === 1 && (
        <div className='input-wrapper'>
          <FormInput
            type='number'
            placeholder='사업자 등록번호를 입력해주세요'
          />
          <AuthForm />
        </div>
      )}
      {step === 2 && <PasswordForm />}
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
  height: 380px;
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
