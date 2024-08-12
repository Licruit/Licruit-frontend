import { FormProvider, useForm } from 'react-hook-form';
import { SignOutDescription } from '@/styles/components/Description';
import Button from '@/components/Button/Button';
import Dropdown from '@/components/Input/Dropdown';

const StoreOptions = [
  '다른 플랫폼에 비해 가격 차이가 없어요.',
  '고객 상담이 아쉬워요.',
  '사용하기 불편해요.',
  '상품 선택이 제한적이에요.',
  '공동구매 서비스가 활성화되지 않아 아쉬워요.',
  '이 플랫폼을 사용할 필요성을 못 느끼겠어요.',
  '기타',
];

// const CompanyOptions = [
//   '수익성이 좋은편이 아닌거같아요.',
//   '사용하기 불편해요.',
//   '결제 시스템이 없어서 불편해요.',
//   '거래조건이 안좋아요.',
//   '기타',
// ];

interface Props {
  onNext: () => void;
}

function Reason({ onNext }: Props) {
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    register,
    formState: { isValid },
  } = methods;

  return (
    <>
      <SignOutDescription>
        OOO님,
        <br />
        회원 탈퇴 사유를 알려주시면, 저희 리쿠르트가 더 나은 서비스를 제공할 수
        있도록 노력하겠습니다.
      </SignOutDescription>
      <FormProvider {...methods}>
        <Dropdown
          options={StoreOptions}
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
        onClick={onNext}
      >
        다음
      </Button>
    </>
  );
}

export default Reason;
