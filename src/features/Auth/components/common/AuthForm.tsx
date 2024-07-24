import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import { useFormContext } from 'react-hook-form';

function AuthForm() {
  const { register } = useFormContext();

  return (
    <Container>
      <InputWithButton>
        <FormInput
          type='tel'
          placeholder='전화번호를 입력해주세요'
          {...register('phone', { required: true })}
        />
        <Button type='button' buttonStyle='outlined' size='lg' theme='primary'>
          인증요청
        </Button>
      </InputWithButton>
      <FormInput
        type='number'
        placeholder='인증번호'
        {...register('code', { required: true })}
      />
    </Container>
  );
}

export default AuthForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputWithButton = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
