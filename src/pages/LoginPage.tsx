import FormTitle from '@/components/Form/FormTitle/FormTitle';
import GenericForm from '@/components/Form/GenericForm';
import MetaTag from '@/components/MetaTag';
import PATH from '@/constants/path';
import { LoginForm, LoginFormType, useLogin } from '@/features/Login';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginPage() {
  const { isFailed, handleLogin } = useLogin();

  return (
    <>
      <MetaTag
        title='리크루트 로그인'
        description='리크루트에 로그인하여 다양한 서비스를 이용해 보세요.'
        keywords='리크루트, 로그인, 계정'
        url='https://www.licruit.site/auth/login'
      />
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
  gap: 8px;
  justify-content: center;
  color: ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[12]}

  & > a {
    color: ${({ theme }) => theme.color.primary[500]};
    text-decoration: underline;
  }
`;
