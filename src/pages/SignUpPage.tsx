import PATH from '@/constants/path';
import { SIGNUP_MAX_STEP } from '@/constants/step';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { JoinForm, signup, SignupFormType } from '@/features/Join';
import { useFunnel } from '@/hooks/form/useFunnel';
import GenericForm from '@/components/Form/GenericForm';
import TitleAndStep from '@/components/Form/FormTitle/TitleAndStep';
import MetaTag from '@/components/MetaTag';

function SignUpPage() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(1);
  const navigate = useNavigate();

  const { mutate: signUp } = useMutation<
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
    signUp(filteredData);
  };
  return (
    <>
      <MetaTag
        title='리크루트 회원가입'
        description='리크루트에 가입하여 다양한 서비스를 이용해 보세요.'
        keywords='리크루트, 회원가입, 비즈니스'
        url='https://www.licruit.site/auth/signUp'
      />
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
    </>
  );
}

export default SignUpPage;
