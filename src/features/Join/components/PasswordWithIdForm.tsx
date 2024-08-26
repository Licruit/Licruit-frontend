import { useEffect, useRef } from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import FormInput from '@/components/Input/FormInput';
import Button from '@/components/Button/Button';
import PasswordForm from '@/components/Form/PasswordForm';
import { useSignup } from '../hooks/useSignup';

function PasswordWithIdForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { register, trigger, watch } = useFormContext();

  const { isVerified, handleUploadCertificate } = useSignup();

  const handleUploadImageButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const upLoadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    handleUploadCertificate(formData);
  };

  const companyNumber = watch('companyNumber');

  useEffect(() => {
    if (companyNumber) {
      trigger('companyNumber');
    }
  }, [companyNumber, trigger]);

  return (
    <Container>
      <InputWrapper>
        <InputWithButton>
          <FormBox isVerified={isVerified}>
            <FormInput
              type='number'
              value={companyNumber}
              disabled={isVerified}
              {...register('companyNumber', {
                required: true,
              })}
            />

            <Button
              type='button'
              $style={isVerified ? 'solid' : 'outlined'}
              $size='lg'
              $theme='primary'
              $disableHover
            >
              인증완료
            </Button>
          </FormBox>
          <UploadBox isVerified={isVerified}>
            <UploadImageInput
              type='file'
              accept='image/*'
              ref={inputRef}
              onChange={upLoadImage}
            />
            <Button
              type='button'
              onClick={handleUploadImageButtonClick}
              $style='outlined'
              $size='lg'
              $theme='primary'
              $width='full'
            >
              사업자등록증 업로드
            </Button>
          </UploadBox>
        </InputWithButton>
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

const UploadImageInput = styled.input`
  display: none;
`;

const FormBox = styled.div<{ isVerified: boolean }>`
  display: flex;
  gap: 10px;

  width: ${({ isVerified }) => (isVerified ? '100%' : '0')};
  height: ${({ isVerified }) => (isVerified ? '100%' : '0')};

  visibility: ${({ isVerified }) => (isVerified ? 'visible' : 'hidden')};
`;

const UploadBox = styled.div<{ isVerified: boolean }>`
  display: ${({ isVerified }) => (isVerified ? 'none' : 'block')};
  width: 100%;
`;
