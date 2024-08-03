import AuthForm from '@/components/Form/AuthForm';
import { ProcessProps } from '@/types/funnel';
import ConsentForm from './ConsentForm';
import IndustryForm from './IndustryForm';
import PasswordWithIdForm from './PasswordWithIdForm';

function JoinForm({ Funnel, Step }: ProcessProps) {
  return (
    <Funnel>
      <Step stepNum={1}>
        <IndustryForm />
        {/* <ConsentForm /> */}
      </Step>
      <Step stepNum={2}>{/* <AuthForm /> */}</Step>
      <Step stepNum={3}>
        <PasswordWithIdForm />
      </Step>
      <Step stepNum={4}>
        <IndustryForm />
      </Step>
      <Step stepNum={5} />
    </Funnel>
  );
}

export default JoinForm;
