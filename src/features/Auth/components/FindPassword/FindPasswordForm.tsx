import FormInput from '@/components/Input/FormInput';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import AuthForm from '../common/Form/AuthForm';
import PasswordForm from '../common/Form/PasswordForm';
import { FunnelProps, StepProps } from '../../hooks/useFunnel';

interface Props {
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  Step: ({ children }: StepProps) => JSX.Element;
}

function FindPasswordForm({ Funnel, Step }: Props) {
  const { register } = useFormContext();

  return (
    <Funnel>
      <Step stepNum={1}>
        <InputWrapper>
          <FormInput
            type='number'
            placeholder='사업자 등록번호를 입력해주세요'
            {...register('businessId', { required: true })}
          />
          <AuthForm />
        </InputWrapper>
      </Step>
      <Step stepNum={2}>
        <PasswordForm />
      </Step>
    </Funnel>
  );
}

export default FindPasswordForm;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
