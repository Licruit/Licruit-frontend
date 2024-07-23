import Button from '@/components/Button/Button';
import FormInput from '@/components/Input/FormInput';
import PATH from '@/constants/path';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginForm() {
  return (
    <Container>
      <div className='input-wrapper'>
        <FormInput placeholder='사업자 등록번호를 입력해주세요' />
        <FormInput type='password' placeholder='비밀번호를 입력해주세요' />
      </div>
      <StyledLink to={PATH.find_password}>비밀번호 찾기</StyledLink>
      <Button buttonText='로그인' />
      <JoinGuide>
        <span>아직 리크루트의 계정이 없나요?</span>
        <Link to={PATH.join}>회원가입</Link>
      </JoinGuide>
    </Container>
  );
}

export default LoginForm;

const Container = styled.div`
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

const StyledLink = styled(Link)`
  font-size: 12px;
  color: ${({ theme }) => theme.color.neutral[400]};
  align-self: flex-end;
`;

const JoinGuide = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  font-size: 12px;
  color: ${({ theme }) => theme.color.neutral[400]};

  & > a {
    font-weight: 500;
    color: ${({ theme }) => theme.color.primary[500]};
    text-decoration: underline;
  }
`;
