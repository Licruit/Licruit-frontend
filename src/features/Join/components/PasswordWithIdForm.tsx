import { FieldError, useFormContext } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import styled from 'styled-components';
import FormInput from '@/components/Input/FormInput';
import Button from '@/components/Button/Button';
import { REGEXP } from '@/constants/form/form';
import PasswordForm from '@/components/Form/PasswordForm';
import { verificationBusiness } from '../api/signup.api';

function PasswordWithIdForm() {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const companyNumber = watch('companyNumber') as string;

  const mutation = useMutation<void, Error>({
    mutationFn: () => verificationBusiness(companyNumber),
    onSuccess: () => {
      clearErrors('companyNumber');
    },
    onError: () => {
      setError('companyNumber', {
        type: 'manual',
        message: '사업자번호가 존재하지 않습니다.',
      });
    },
  });

  const handleSendId = () => {
    mutation.mutate();
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
              validate: () => !errors.companyNumber,
            })}
          />
          <Button
            type='button'
            onClick={handleSendId}
            $style='outlined'
            $size='lg'
            $theme='primary'
          >
            인증요청
          </Button>
        </InputWithButton>
        {mutation.isSuccess && (
          <SuccessMessage>사용가능한 사업자번호입니다.</SuccessMessage>
        )}
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

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ErrorMessage = styled.div`
  height: 12px;
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.body.medium[12]}
`;
const SuccessMessage = styled.div`
  height: 12px;
  color: ${({ theme }) => theme.color.primary[500]};
  ${({ theme }) => theme.typo.body.medium[12]}
`;
