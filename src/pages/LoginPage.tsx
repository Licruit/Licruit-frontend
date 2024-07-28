import PATH from '@/constants/path';
import {
  FormTitle,
  GenericForm,
  LoginForm,
  LoginFormType,
} from '@/features/Auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginPage() {
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const handleLogin = (value: LoginFormType) => {
    // TODO: 서버 연동
    console.log(value);
    setIsFailed(true);
  };

  return (
    <>
      <GenericForm<LoginFormType>
        onSubmit={handleLogin}
        formOptions={{ mode: 'onChange' }}
        caption={
          <JoinGuide>
            <span>아직 리크루트의 계정이 없나요?</span>
            <Link to={PATH.join}>회원가입</Link>
          </JoinGuide>
        }
      >
        <FormTitle type='login' />
        <LoginForm isFailed={isFailed} />
      </GenericForm>
    </>
  );
}

export default LoginPage;

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
