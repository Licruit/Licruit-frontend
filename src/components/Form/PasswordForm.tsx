import FormInput from '@/components/Input/FormInput';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import PasswordInput from './PasswordInput';

function PasswordForm() {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <Container>
      <PasswordInput />
      <InputWrapper>
        <FormInput
          type='password'
          placeholder='비밀번호를 한 번 더 입력해주세요'
          hasVisibility
          {...register('passwordCheck', {
            required: true,
            validate: {
              matches: (value: string) =>
                value.length === 0 ||
                value === watch('password') ||
                '비밀번호가 일치하지않습니다. 다시 한 번 입력해주세요.',
            },
            onChange: async (e) => {
              const { value } = e.target;
              if (value.length > 0) {
                await trigger('passwordCheck');
              }
            },
          })}
        />
        <span className='error'>
          {errors.passwordCheck && String(errors.passwordCheck.message)}
        </span>
      </InputWrapper>
    </Container>
  );
}

export default PasswordForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  .error {
    height: 12px;
    color: ${({ theme }) => theme.color.error};
    ${({ theme }) => theme.typo.body.medium[12]}
  }
`;
