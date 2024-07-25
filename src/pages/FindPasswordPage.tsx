import { FindPasswordForm } from '@/features/Auth';
import GenericForm from '@/features/Auth/components/common/Form/GenericForm';
import TitleAndStep from '@/features/Auth/components/common/FormTitle/TitleAndStep';
import { useFunnel } from '@/features/Auth/hooks/useFunnel';

interface FindPasswordFormType {
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
      setStep={setStep}
      formOptions={{ mode: 'onChange' }}
      onSubmit={handleSubmitForm}
    >
      <TitleAndStep
        formType='find_password'
        currentStep={currentStep}
        maxStep={2}
      />
      <FindPasswordForm Funnel={Funnel} Step={Step} />
    </GenericForm>
  );
}

export default FindPasswordPage;
