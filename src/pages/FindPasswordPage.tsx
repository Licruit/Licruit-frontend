import { FIND_PASSWORD_MAX_STEP } from '@/constants/step';
import {
  FindPasswordForm,
  FindPasswordFormType,
  GenericForm,
  TitleAndStep,
  useFindPassword,
  useFunnel,
} from '@/features/Auth';

function FindPasswordPage() {
  const { Step, Funnel, setStep, currentStep } = useFunnel(1);
  const { handleSubmitForm } = useFindPassword(currentStep, setStep);

  return (
    <GenericForm<FindPasswordFormType>
      onSubmit={handleSubmitForm}
      formOptions={{
        mode: 'onChange',
        defaultValues: { isVerified: false },
      }}
      setStep={setStep}
      isLastStep
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
