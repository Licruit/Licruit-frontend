import { SignOutDescription } from '@/styles/components/Description';
import Button from '@/components/Button/Button';
import useLogOut from '@/hooks/logout/useLogOut';

interface Props {
  onClose: () => void;
}

function Complete({ onClose }: Props) {
  const handleLogOut = useLogOut();

  const handleClickButton = () => {
    onClose();
    handleLogOut();
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
