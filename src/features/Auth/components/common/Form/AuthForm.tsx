import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';
import { useCode } from '@/features/Auth/hooks/useCode';
import Button from '@/components/Button/Button';
import { useFormContext } from 'react-hook-form';
import { REGEXP } from '@/features/Auth/constants/form';
import Timer from '../Timer';

function AuthForm() {
  const {
    register,
    watch,
    setError,
    formState: { errors },
  } = useFormContext();
  const { handleSendCode, expTime, handleVerifyCode } = useCode();

  return (
    <Container>
      <InputWithButton>
        <FormInput
          type='tel'
          placeholder='전화번호를 입력해주세요'
          {...register('phone', { required: true, pattern: REGEXP.phone })}
        />
        <Button
          type='button'
          onClick={() => handleSendCode(watch('phone'))}
          $style='outlined'
          $size={undefined}
          $theme='primary'
        >
          {expTime ? '재요청' : '인증요청'}
        </Button>
      </InputWithButton>
      <InputWrapper>
        <InputWithButton>
          <div className='wrapper'>
            <FormInput
              type='number'
              placeholder='인증번호'
              {...register('code', {
                required: true,
                validate: () => {
                  if (watch('isVerified')) {
                    return true;
                  }
                  return false;
                },
              })}
            />
            {expTime && (
              <Timer
                expTime={expTime}
                onFail={() =>
                  setError('code', {
                    message: '유효시간이 만료되었습니다. 다시 시도해주세요.',
                  })
                }
              />
            )}
          </div>
          <Button
            type='button'
            onClick={() => handleVerifyCode(watch('phone'), watch('code'))}
            $style='outlined'
            $size={undefined}
            $theme='primary'
          >
            확인
          </Button>
        </InputWithButton>
        <span className='error'>
          {errors.code && String(errors.code.message)}
        </span>
      </InputWrapper>
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

  .wrapper {
    position: relative;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .error {
    height: 12px;
    color: ${({ theme }) => theme.color.error};
    ${({ theme }) => theme.typo.body.medium[12]}
  }
`;
