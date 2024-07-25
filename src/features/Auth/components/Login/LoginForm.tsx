import FormInput from '@/components/Input/FormInput';
import PATH from '@/constants/path';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  isFailed: boolean;
}

function LoginForm({ isFailed }: Props) {
  const { register } = useFormContext();

  return (
    <Container>
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
    </Container>
  );
}

export default LoginForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

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
