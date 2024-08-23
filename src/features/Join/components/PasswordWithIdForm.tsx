import { FieldError, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import FormInput from '@/components/Input/FormInput';
import Button from '@/components/Button/Button';
import { REGEXP } from '@/constants/form/form';
import PasswordForm from '@/components/Form/PasswordForm';
import { useSignup } from '../hooks/useSignup';

function PasswordWithIdForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { handleSendId, isVerified, setIsVerified } = useSignup();
  const handleInputChange = () => {
    if (isVerified) {
      setIsVerified(false);
    }
  };

  return (
    <Container>
      <InputWrapper>
        <InputWithButton>
          <FormInput
            type='number'
            placeholder='사업자 등록번호를 입력해주세요'
            {...register('companyNumber', {
              required: true,
              pattern: REGEXP.companyNumber,
              onChange: handleInputChange,
            })}
          />
          {/* 1408026673 */}

          <Button
            type='button'
            onClick={handleSendId}
            $style={isVerified ? 'solid' : 'outlined'}
            $size='lg'
            $theme='primary'
          >
            {isVerified ? '인증완료' : '인증요청'}
          </Button>
        </InputWithButton>

        {errors.companyNumber && (
          <ErrorMessage>
            {(errors.companyNumber as FieldError).message}
          </ErrorMessage>
        )}
      </InputWrapper>
      <PasswordForm />
    </Container>
  );
}

export default PasswordWithIdForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const InputWithButton = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  height: 12px;
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.body.medium[12]}
`;
