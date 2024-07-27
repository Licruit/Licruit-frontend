import React from 'react';
import AuthForm from '../common/Form/AuthForm';
import ConsentForm from './ConsentForm';
import IndustryForm from './IndustryForm';
import { ProcessProps } from '../../types/funnel';
import PasswordWithIdForm from './PasswordWithIdForm';

function JoinForm({ Funnel, Step }: ProcessProps) {
  return (
    <Funnel>
      <Step stepNum={1}>
        <PasswordWithIdForm />
        {/* <ConsentForm /> */}
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
