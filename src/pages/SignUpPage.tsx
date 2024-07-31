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

  const handleSubmitForm = () => {
    // TODO: 회원가입 api
  };

  return (
    <GenericForm<SignupFormType>
      onSubmit={handleSubmitForm}
      setStep={setStep}
      isLastStep={currentStep === SIGNUP_MAX_STEP}
      formOptions={{
        mode: 'onChange',
        defaultValues: { isVerified: false },
      }}
    >
      <TitleAndStep
        formType='signUp'
        currentStep={currentStep}
        maxStep={SIGNUP_MAX_STEP}
      />
      <JoinForm Funnel={Funnel} Step={Step} />
    </GenericForm>
  );
}

export default SignUpPage;
