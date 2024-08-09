import PATH from '@/constants/path';
import { SIGNUP_MAX_STEP } from '@/constants/step';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { SignupFormType } from '@/features/Join/types/signup';
import { JoinForm, signup } from '@/features/Join';
import { useFunnel } from '@/hooks/form/useFunnel';
import GenericForm from '@/components/Form/GenericForm';
import TitleAndStep from '@/components/Form/FormTitle/TitleAndStep';

function SignUpPage() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(1);
  const navigate = useNavigate();

  const signupMutation = useMutation<
    void,
    Error,
    Omit<SignupFormType, 'isVerified'>
  >({
    mutationFn: async (data) => {
      await signup(data);
    },
    onSuccess: () => {
      navigate(PATH.login);
    },
  });

  const handleSubmit = (data: SignupFormType) => {
    const {
      companyNumber,
      password,
      businessName,
      contact,
      address,
      sectorId,
      isMarketing,
    } = data;

    const filteredData: Omit<SignupFormType, 'isVerified'> = {
      companyNumber,
      password,
      businessName,
      contact,
      address,
      sectorId,
      isMarketing,
    };

    signupMutation.mutate(filteredData);
  };
  return (
    <GenericForm<SignupFormType>
      onSubmit={handleSubmit}
      setStep={setStep}
      isLastStep={currentStep === SIGNUP_MAX_STEP}
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
