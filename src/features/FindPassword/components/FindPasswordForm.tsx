import PasswordForm from '@/components/Form/PasswordForm';
import { ProcessProps } from '@/types/funnel';
import AuthWithIdForm from './AuthWithIdForm';

function FindPasswordForm({ Funnel, Step }: ProcessProps) {
  return (
    <Funnel>
      <Step stepNum={1}>
        <AuthWithIdForm />
      </Step>
      <Step stepNum={2}>
        <PasswordForm />
      </Step>
    </Funnel>
  );
}

export default FindPasswordForm;
