import { useNavigate } from 'react-router-dom';
import { SignOutDescription } from '@/styles/components/Description';
import NextButton from '../common/NextButton';

function Complete() {
  const navigate = useNavigate();

  // TODO 회원탈퇴 api 요청
  const handleClickButton = () => {
    navigate('/auth/login', { replace: true });
  };

  return (
    <>
      <SignOutDescription>
        회원탈퇴가 정상적으로 완료되었습니다.
        <br />
        그동안 이용해 주셔서 감사합니다.
      </SignOutDescription>
      <NextButton isValid onNext={handleClickButton} />
    </>
  );
}

export default Complete;
