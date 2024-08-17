import TitleAndStep from '@/components/Form/FormTitle/TitleAndStep';
import GenericForm from '@/components/Form/GenericForm';
import MetaTag from '@/components/MetaTag';
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
    <>
      <MetaTag
        title='리크루트 비밀번호 찾기'
        description='비밀번호를 찾기 위해 필요한 정보를 입력하세요.'
        keywords='리크루트, 비밀번호 찾기, 계정 복구'
        url='https://www.licruit.site/find-password'
      />
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
    </>
  );
}

export default FindPasswordPage;
