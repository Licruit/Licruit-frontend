import { useFormContext, useWatch } from 'react-hook-form';
import { SignOutDescription } from '@/styles/components/Description';
import Button from '@/components/Button/Button';
import Dropdown from '@/components/Input/Dropdown';
import FormInput from '@/components/Input/FormInput';
import { STORE_OTIONS } from '../../constants/options';

interface Props {
  onNext: () => void;
}

function Reason({ onNext }: Props) {
  const { register } = useFormContext();

  const selectedOption = useWatch({
    name: 'reason',
  });

  const etcValue = useWatch({
    name: 'etc',
  });

  const isButtonDisabled =
    selectedOption === '기타' ? !etcValue : !selectedOption;

  return (
    <>
      <SignOutDescription>
        {
          'OOO님,\r\n회원 탈퇴 사유를 알려주시면, 저희 리쿠르트가 더 나은 서비스를 제공할 수 있도록 노력하겠습니다.'
        }
      </SignOutDescription>
      <Dropdown
        options={STORE_OTIONS}
        placeholder='사유를 선택해주세요.'
        name='reason'
      />

      {selectedOption === '기타' && (
        <FormInput
          placeholder='기타 사유를 입력해 주세요'
          {...register('etc')}
        />
      )}

      <Button
        $style='outlined'
        $theme='primary'
        $width='full'
        $size='md'
        onClick={onNext}
        disabled={isButtonDisabled}
      >
        다음
      </Button>
    </>
  );
}

export default Reason;
