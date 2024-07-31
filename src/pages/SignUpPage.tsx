import {
  GenericForm,
  JoinForm,
  TitleAndStep,
  useFunnel,
} from '@/features/Auth';
import PATH from '@/constants/path';
import { SIGNUP_MAX_STEP } from '@/constants/step';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signup } from '@/features/Auth/api/signup.api';
import { SignupFormType } from '@/features/Auth/types/signup';

function SignUpPage() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(1);
  const navigate = useNavigate();

  const mutation = useMutation<void, Error, SignupFormType>({
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
    } = data;

    const filteredData: SignupFormType = {
      companyNumber,
      password,
      businessName,
      contact,
      address,
      sectorId,
    };

    mutation.mutate(filteredData);
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
