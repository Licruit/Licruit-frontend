import PasswordForm from '../common/Form/PasswordForm';
import { FunnelProps, StepProps } from '../../hooks/useFunnel';
import AuthWithIdForm from './AuthWithIdForm';

interface Props {
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  Step: ({ children }: StepProps) => JSX.Element;
}

function FindPasswordForm({ Funnel, Step }: Props) {
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
