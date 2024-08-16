import AuthForm from '@/components/Form/AuthForm';
import FormInput from '@/components/Input/FormInput';
import { REGEXP } from '@/constants/form/form';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function AuthWithIdForm() {
  const { register } = useFormContext();

  return (
    <InputWrapper>
      <FormInput
        type='number'
        placeholder='사업자 등록번호를 입력해주세요'
        {...register('companyNumber', {
          required: true,
          pattern: REGEXP.companyNumber,
        })}
      />
      <AuthForm />
    </InputWrapper>
  );
}

export default AuthWithIdForm;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
