import FormInput from '@/components/Input/FormInput';
import MaskInput from '@/components/Input/MaskInput';
import PATH from '@/constants/path';
import { CheckboxIcon } from 'public/assets/icons';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  isAutoLogin: boolean;
  toggleAutoLogin: () => void;
}

function LoginForm({ isAutoLogin, toggleAutoLogin }: Props) {
  const { register } = useFormContext();

  return (
    <Container>
      <div className='input-wrapper'>
        <MaskInput
          type='text'
          maskType='companyNumber'
          placeholder='사업자 등록번호를 입력해주세요'
        />
        <FormInput
          type='password'
          placeholder='비밀번호를 입력해주세요'
          hasVisibility
          {...register('password', { required: true })}
        />
      </div>
      <BottomBar>
        <AutoLoginButton
          type='button'
          className='auto-login'
          onClick={toggleAutoLogin}
          $isActive={isAutoLogin}
        >
          <CheckboxIcon width={17} height={17} />
          자동 로그인
        </AutoLoginButton>
        <Link to={PATH.find_password}>비밀번호 찾기</Link>
      </BottomBar>
    </Container>
  );
}

export default LoginForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${({ theme }) => theme.typo.body.medium[12]}

  & a {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

const AutoLoginButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.primary[500] : theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[12]}

  svg {
    fill: ${({ theme, $isActive }) =>
      $isActive ? theme.color.primary[500] : theme.color.neutral[400]};
  }
`;
