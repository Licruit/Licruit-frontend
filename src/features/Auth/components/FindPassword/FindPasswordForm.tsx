import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormButton from '@/components/Button/FormButton';
import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';
import MultiStep from '../common/MultiStep';
import AuthForm from '../common/AuthForm';
import PasswordForm from '../common/PasswordForm';
import FormTitle from '../common/FormTitle';

interface FindPasswordForm {
  businessId: number;
  phone: number;
  code: number;
  password: string;
  passwordCheck: string;
}

function FindPasswordForm() {
  const [step, setStep] = useState<number>(1);
  const methods = useForm<FindPasswordForm>({ mode: 'onChange' });
  const {
    register,
    formState: { isValid },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Container>
        <FormTitle type='find_password' step={step} />
        <MultiStep current={step} maxStep={2} />
        {step === 1 && (
          <div className='input-wrapper'>
            <FormInput
              type='number'
              placeholder='사업자 등록번호를 입력해주세요'
              {...register('businessId', { required: true })}
            />
            <AuthForm />
          </div>
        )}
        {step === 2 && <PasswordForm />}
        <FormButton
          type='button'
          disabled={!isValid}
          buttonText='다음'
          onClick={() => setStep((prev) => prev + 1)}
        />
      </Container>
    </FormProvider>
  );
}

export default FindPasswordForm;

const Container = styled.form`
  width: 100%;
  height: 520px;
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
