import Button from '@/components/Button/Button';
import FormInput from '@/components/Input/FormInput';
import PATH from '@/constants/path';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LoginForm {
  businessId: number;
  password: string;
}

function LoginForm() {
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginForm>({
    mode: 'onChange',
  });

  const handleLogin = (value: LoginForm) => {
    // TODO: 서버 연동
    console.log(value);
    setIsFailed(true);
  };

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <div className='input-wrapper'>
        <FormInput
          type='number'
          placeholder='사업자 등록번호를 입력해주세요'
          {...register('businessId', { required: true })}
        />
        <FormInput
          type='password'
          placeholder='비밀번호를 입력해주세요'
          hasVisibility
          {...register('password', { required: true })}
        />
      </div>
      <ErrorAndLink>
        <span className='error'>
          {isFailed
            ? '사업자 등록번호 또는 비밀번호가 잘못되었습니다. 다시 한 번 입력해주세요'
            : ''}
        </span>

        <Link to={PATH.find_password}>비밀번호 찾기</Link>
      </ErrorAndLink>

      <Button
        type='submit'
        disabled={!isValid}
        $style='solid'
        $theme='primary'
        $width='full'
        $size='lg'
      >
        로그인
      </Button>
      <JoinGuide>
        <span>아직 리크루트의 계정이 없나요?</span>
        <Link to={PATH.join}>회원가입</Link>
      </JoinGuide>
    </Container>
  );
}

export default LoginForm;

const Container = styled.form`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const ErrorAndLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.typo.body.medium[12]}

  .error {
    color: ${({ theme }) => theme.color.error};
  }

  & > a {
    color: ${({ theme }) => theme.color.neutral[400]};
    align-self: flex-end;
  }
`;
const JoinGuide = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[12]}

  & > a {
    color: ${({ theme }) => theme.color.primary[500]};
    text-decoration: underline;
  }
`;
