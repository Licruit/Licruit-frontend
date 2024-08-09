import { useNavigate } from 'react-router-dom';
import { SignOutDescription } from '@/styles/components/Description';
import Button from '@/components/Button/Button';

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
      <Button
        $style='outlined'
        $theme='primary'
        $width='full'
        $size='md'
        onClick={handleClickButton}
      >
        확인
      </Button>
    </>
  );
}

export default Complete;
