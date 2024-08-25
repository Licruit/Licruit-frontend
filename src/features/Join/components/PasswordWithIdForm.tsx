import { useRef, useState } from 'react';

import { FieldError, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import FormInput from '@/components/Input/FormInput';
import Button from '@/components/Button/Button';
import PasswordForm from '@/components/Form/PasswordForm';
import { useSignup } from '../hooks/useSignup';
import useCerficationMutation from '../hooks/useCerficationMutation';

function PasswordWithIdForm() {
  const [companyData, setCompanyData] = useState({
    companyNumber: '',
    isWholesaler: false,
  });
  const { mutate: uploadCertificate } = useCerficationMutation();
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    formState: { errors },
  } = useFormContext();

  const { handleSendId, isVerified } = useSignup(companyData.companyNumber);

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

    uploadCertificate(formData, {
      onSuccess: (data) => {
        setCompanyData({
          companyNumber: data.companyNumber,
          isWholesaler: data.isWholesaler,
        });
        handleSendId();
      },
    });
  };
  return (
    <Container>
      <InputWrapper>
        <InputWithButton>
          {isVerified ? (
            <>
              <FormInput
                type='number'
                value={companyData.companyNumber}
                disabled={isVerified}
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
            </>
          ) : (
            <>
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
            </>
          )}
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

const UploadImageInput = styled.input`
  display: none;
`;
