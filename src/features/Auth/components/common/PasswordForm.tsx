import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';

function PasswordForm() {
  return (
    <Container>
      <FormInput
        type='password'
        placeholder='비밀번호를 입력해주세요'
        hasVisibility
      />
      <FormInput
        type='password'
        placeholder='비밀번호를 한 번 더 입력해주세요'
        hasVisibility
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
