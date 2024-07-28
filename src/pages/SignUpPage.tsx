import { useState } from 'react';
import {
  GenericForm,
  JoinForm,
  TitleAndStep,
  useFunnel,
} from '@/features/Auth';
import { SIGNUP_MAX_STEP } from '@/constants/step';
import { FindPasswordFormType } from './FindPasswordPage';

interface SignupFormType extends FindPasswordFormType {
  address: string;
  businessName: string;
  industry: string;
}
function SignUpPage() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(1);
  const [isCheckVaild, setIsCheckVaild] = useState(false);

  const handleSubmitForm = () => {
    // TODO: 회원가입 api
  };

  return (
    <GenericForm<SignupFormType>
      onSubmit={handleSubmitForm}
      formOptions={{
        mode: 'onChange',
      }}
      setStep={setStep}
      isLastStep={currentStep === SIGNUP_MAX_STEP}
      isCheckVaild={isCheckVaild}
    >
      <TitleAndStep
        formType='signUp'
        currentStep={currentStep}
        maxStep={SIGNUP_MAX_STEP}
      />
      <JoinForm Funnel={Funnel} Step={Step} setIsCheckVaild={setIsCheckVaild} />
    </GenericForm>
  );
}

export default SignUpPage;
