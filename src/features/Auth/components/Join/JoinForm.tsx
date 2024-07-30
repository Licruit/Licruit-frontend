import React from 'react';
import AuthForm from '../common/Form/AuthForm';
import ConsentForm from './ConsentForm';
import IndustryForm from './IndustryForm';
import { ProcessProps } from '../../types/funnel';
import PasswordWithIdForm from './PasswordWithIdForm';

interface Props extends ProcessProps {
  setIsCheckVaild: React.Dispatch<React.SetStateAction<boolean>>;
}

function JoinForm({ Funnel, Step, setIsCheckVaild }: Props) {
  return (
    <Funnel>
      <Step stepNum={1}>
        <IndustryForm />

        {/* <ConsentForm setIsCheckVaild={setIsCheckVaild} /> */}
      </Step>
      <Step stepNum={2}>
        <AuthForm />
      </Step>
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
