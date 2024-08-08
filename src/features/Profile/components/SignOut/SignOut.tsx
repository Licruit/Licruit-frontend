import { useFunnel } from '@/hooks/form/useFunnel';
import { BackIcon } from 'public/assets/icons';
import { useTheme } from 'styled-components';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import MyPageHeader from '../common/MyPageHeader';
import Reason from './Reason';
import Confirm from './Confirm';
import CheckUser from './CheckUser';
import Complete from './Complete';

function SignOut() {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);
  const { Funnel, Step, setStep, currentStep } = useFunnel(1);
  const theme = useTheme();

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
      <Funnel>
        <Step stepNum={1}>
          <Reason onNext={() => setStep(2)} />
        </Step>
        <Step stepNum={2}>
          <Confirm onNext={() => setStep(3)} />
        </Step>
        <Step stepNum={3}>
          <CheckUser onNext={() => setStep(4)} />
        </Step>
        <Step stepNum={4}>
          <Complete />
        </Step>
      </Funnel>
    </>
  );
}

export default SignOut;
