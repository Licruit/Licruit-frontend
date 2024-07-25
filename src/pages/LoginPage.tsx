import { LoginForm } from '@/features/Auth';
import FormTitle from '@/features/Auth/components/common/FormTitle';

function LoginPage() {
  return (
    <>
      <FormTitle type='login' />
      <LoginForm />
    </>
  );
}

export default LoginPage;
