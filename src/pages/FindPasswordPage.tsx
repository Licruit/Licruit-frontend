import PATH from '@/constants/path';
import { FIND_PASSWORD_MAX_STEP } from '@/constants/step';
import {
  FindPasswordForm,
  GenericForm,
  requestResetPassword,
  resetPassword,
  TitleAndStep,
  useFunnel,
} from '@/features/Auth';
import { useNavigate } from 'react-router-dom';

export interface FindPasswordFormType {
  companyNumber: number;
  phone: number;
  code: number;
  isVerified: boolean;
  password: string;
  passwordCheck: string;
}

function FindPasswordPage() {
  const navigate = useNavigate();
  const { Step, Funnel, setStep, currentStep } = useFunnel(1);

  const handleSubmitForm = async (data: FindPasswordFormType) => {
    if (currentStep === 1) {
      requestResetPassword(
        data.companyNumber.toString(),
        data.phone.toString()
      ).then(() => setStep((prev) => prev + 1));
    } else {
      resetPassword(data.password).then(() => navigate(PATH.login));
    }
  };

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
