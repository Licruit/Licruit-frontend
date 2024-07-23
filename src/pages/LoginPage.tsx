import styled from 'styled-components';
import { LoginForm } from '@/features/Auth';
import FormTitle from '@/components/Form/FormTitle';

function LoginPage() {
  return (
    <Container>
      <FormTitle type='login' />
      <LoginForm />
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
