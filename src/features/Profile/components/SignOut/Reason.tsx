import FormSelect from '@/components/Input/FormSelect';
import { FormProvider, useForm } from 'react-hook-form';
import { SignOutDescription } from '@/styles/components/Description';
import Button from '@/components/Button/Button';
import { STORE_OTIONS } from '../../constants/options';

interface Props {
  onNext: (value: string) => void;
}

function Reason({ onNext }: Props) {
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    register,
    formState: { isValid },
    watch,
  } = methods;

  const reason = watch('reason');

  return (
    <>
      <SignOutDescription>
        OOO님,
        <br />
        회원 탈퇴 사유를 알려주시면, 저희 리쿠르트가 더 나은 서비스를 제공할 수
        있도록 노력하겠습니다.
      </SignOutDescription>
      <FormProvider {...methods}>
        <FormSelect
          options={STORE_OTIONS}
          placeholder='사유를 선택해주세요.'
          {...register('reason', {
            required: true,
          })}
        />
      </FormProvider>
      <Button
        $style='outlined'
        $theme='primary'
        disabled={!isValid}
        $width='full'
        $size='md'
        onClick={() => onNext(reason)}
      >
        다음
      </Button>
    </>
  );
}

export default Reason;
