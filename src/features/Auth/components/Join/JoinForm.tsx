import React from 'react';
import AuthForm from '../common/Form/AuthForm';
import ConsentForm from './ConsentForm';
import IndustryForm from './IndustryForm';
import AuthWithIdForm from '../FindPassword/AuthWithIdForm';
import Complete from './Complete';
import { ProcessProps } from '../../types/funnel';

function JoinForm({ Funnel, Step }: ProcessProps) {
  return (
    <Funnel>
      <Step stepNum={1}>
        <ConsentForm />
      </Step>
      <Step stepNum={2}>
        <AuthForm />
      </Step>
      <Step stepNum={3}>
        <AuthWithIdForm />
      </Step>
      <Step stepNum={4}>
        <IndustryForm />
      </Step>
      <Step stepNum={5}>
        <Complete />
      </Step>
    </Funnel>
  );
}

export default JoinForm;
