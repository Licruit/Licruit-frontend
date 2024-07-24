import { LoginForm } from '@/features/Auth';
import FormTitle from '@/components/Form/FormTitle';

function LoginPage() {
  return (
    <>
      <FormTitle type='login' />
      <LoginForm />
    </>
  );
}

export default LoginPage;
