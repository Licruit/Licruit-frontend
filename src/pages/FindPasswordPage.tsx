import FormTitle from '@/components/Form/FormTitle';
import { FindPasswordForm } from '@/features/Auth';
import { useState } from 'react';

function FindPasswordPage() {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      <FormTitle type='find_password' step={step} />
      <FindPasswordForm step={step} setStep={setStep} />
    </>
  );
}

export default FindPasswordPage;
