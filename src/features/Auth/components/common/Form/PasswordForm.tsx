import FormInput from '@/components/Input/FormInput';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function PasswordForm() {
  const { register } = useFormContext();

  return (
    <Container>
      <FormInput
        type='password'
        placeholder='비밀번호를 입력해주세요'
        hasVisibility
        {...register('password', { required: true })}
      />
      <FormInput
        type='password'
        placeholder='비밀번호를 한 번 더 입력해주세요'
        hasVisibility
        {...register('passwordCheck', { required: true })}
      />
    </Container>
  );
}

export default PasswordForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
