import TitleAndStep from '@/components/Form/FormTitle/TitleAndStep';
import GenericForm from '@/components/Form/GenericForm';
import { FIND_PASSWORD_MAX_STEP } from '@/constants/step';
import {
  FindPasswordForm,
  FindPasswordFormType,
  useFindPassword,
} from '@/features/FindPassword';
import { useFunnel } from '@/hooks/form/useFunnel';

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
