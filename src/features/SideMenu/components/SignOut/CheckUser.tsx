import FormInput from '@/components/Input/FormInput';
import MaskInput from '@/components/Input/MaskInput';
import { useFormContext, useWatch } from 'react-hook-form';
import styled from 'styled-components';
import { SignOutDescription } from '@/styles/components/Description';
import CancelAndNext from '../common/CancelAndNext';

interface Props {
  isError: boolean;
}

function CheckUser({ isError }: Props) {
  const { register } = useFormContext();

  const companyNumber = useWatch({
    name: 'companyNumber',
  });

  const password = useWatch({
    name: 'password',
  });

  const isButtonDisabled = companyNumber && password;

  return (
    <>
      <SignOutDescription>
        탈퇴하시려면 사업자 등록번호와 비밀번호를 입력해주시길 바랍니다.
      </SignOutDescription>
      <InputWrapper>
        <MaskInput
          type='text'
          maskType='companyNumber'
          placeholder='사업자 등록번호를 입력해주세요'
        />
        <FormInput
          type='password'
          placeholder='비밀번호를 입력해주세요'
          hasVisibility
          {...register('password', { required: true })}
        />
      </InputWrapper>
      <Error className='error'>
        {isError
          ? '사업자 등록번호 또는 비밀번호가 잘못되었습니다. 다시 한 번 입력해주세요'
          : ''}
      </Error>
      <CancelAndNext isValid={isButtonDisabled} type='submit' />
    </>
  );
}

const Error = styled.p`
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.body.medium[12]}
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export default CheckUser;
