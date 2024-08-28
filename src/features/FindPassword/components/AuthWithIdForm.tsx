import AuthForm from '@/components/Form/AuthForm';
import MaskInput from '@/components/Input/MaskInput';
import { REGEXP } from '@/constants/form/form';
import styled from 'styled-components';

function AuthWithIdForm() {
  return (
    <InputWrapper>
      <MaskInput
        type='text'
        regExp={REGEXP.companyNumber}
        maskType='companyNumber'
        placeholder='사업자 등록번호를 입력해주세요'
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
