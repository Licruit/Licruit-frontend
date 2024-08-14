import FormInput from '@/components/Input/FormInput';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { SignOutDescription } from '@/styles/components/Description';
import CancelAndNext from '../common/CancelAndNext';

interface Props {
  onNext: () => void;
}

function CheckUser({ onNext }: Props) {
  const methods = useForm({ mode: 'onChange' });

  const {
    register,
    formState: { isValid },
  } = methods;

  return (
    <>
      <SignOutDescription>
        탈퇴하시려면 사업자 등록번호와 비밀번호를 입력해주시길 바랍니다.
      </SignOutDescription>
      <InputWrapper>
        <FormInput
          type='number'
          placeholder='사업자 등록번호를 입력해주세요'
          {...register('companyNumber', { required: true })}
        />
        <FormInput
          type='password'
          placeholder='비밀번호를 입력해주세요'
          hasVisibility
          {...register('password', { required: true })}
        />
      </InputWrapper>
      <CancelAndNext isValid={isValid} onNext={onNext} />
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export default CheckUser;
