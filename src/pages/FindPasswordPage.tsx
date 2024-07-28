import { FIND_PASSWORD_MAX_STEP } from '@/constants/step';
import {
  FindPasswordForm,
  GenericForm,
  TitleAndStep,
  useFunnel,
} from '@/features/Auth';

export interface FindPasswordFormType {
  businessId: number;
  phone: number;
  code: number;
  password: string;
  passwordCheck: string;
}

function FindPasswordPage() {
  const { Step, Funnel, setStep, currentStep } = useFunnel(1);

  const handleSubmitForm = () => {
    // TODO: 서버 연동
  };

  return (
    <GenericForm<FindPasswordFormType>
      onSubmit={handleSubmitForm}
      formOptions={{ mode: 'onChange' }}
      setStep={setStep}
      isLastStep={currentStep === FIND_PASSWORD_MAX_STEP}
    >
      <TitleAndStep
        formType='find_password'
        currentStep={currentStep}
        maxStep={FIND_PASSWORD_MAX_STEP}
      />
      <FindPasswordForm Funnel={Funnel} Step={Step} />
    </GenericForm>
  );
}

export default FindPasswordPage;
