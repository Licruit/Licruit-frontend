import { useFunnel } from '@/hooks/form/useFunnel';
import { BackIcon } from 'public/assets/icons';
import styled, { useTheme } from 'styled-components';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MyPageHeader from '../common/MyPageHeader';
import Reason from './Reason';
import Confirm from './Confirm';
import CheckUser from './CheckUser';
import Complete from './Complete';
import useSignOutMutaion from '../../hooks/useSignOutMutation';
import { SignOutReq } from '../../model/signout.model';

interface Props {
  onClose: () => void;
}

interface Form extends SignOutReq {
  etc: string;
}

function SignOut({ onClose }: Props) {
  const [isError, setIsError] = useState(false);
  const setContent = useMyPageSideMenuStore((state) => state.setContent);
  const userInfo = useMyPageSideMenuStore((state) => state.props);
  const { Funnel, Step, setStep, currentStep } = useFunnel(1);
  const theme = useTheme();
  const methods = useForm<Form>({ mode: 'onChange' });
  const { mutate: signOut } = useSignOutMutaion();

  const { handleSubmit } = methods;

  const handleOnSubmit = (data: Form) => {
    const signoutReason = data.reason === '기타' ? data.etc : data.reason;
    signOut(
      {
        companyNumber: data.companyNumber,
        password: data.password,
        reason: signoutReason,
      },
      {
        onSuccess: () => {
          setStep(4);
        },
        onError: () => setIsError(true),
      }
    );
  };

  return (
    <>
      <MyPageHeader
        title='회원탈퇴'
        icon={
          <BackIcon
            fill={theme.color.neutral[900]}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              currentStep === 1
                ? setContent('my-page')
                : setStep(currentStep - 1)
            }
          />
        }
      />
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
          <Funnel>
            <Step stepNum={1}>
              <Reason onNext={() => setStep(2)} userName={userInfo.user} />
            </Step>
            <Step stepNum={2}>
              <Confirm onNext={() => setStep(3)} companyNumber={userInfo.id} />
            </Step>
            <Step stepNum={3}>
              <CheckUser isError={isError} />
            </Step>
            <Step stepNum={4}>
              <Complete onClose={onClose} />
            </Step>
          </Funnel>
        </Form>
      </FormProvider>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default SignOut;
