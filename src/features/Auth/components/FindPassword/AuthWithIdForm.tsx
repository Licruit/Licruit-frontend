import FormInput from '@/components/Input/FormInput';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import AuthForm from '../common/Form/AuthForm';
import { REGEXP } from '../../constants/form';

function AuthWithIdForm() {
  const { register } = useFormContext();

  return (
    <InputWrapper>
      <FormInput
        type='number'
        placeholder='사업자 등록번호를 입력해주세요'
        {...register('businessId', {
          required: true,
          pattern: REGEXP.businessId,
        })}
      />
      <AuthForm />
    </InputWrapper>
  );
}

export default AuthWithIdForm;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
