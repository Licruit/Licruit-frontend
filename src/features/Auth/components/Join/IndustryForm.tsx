import Button from '@/components/Button/Button';
import FormInput from '@/components/Input/FormInput';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function IndustryForm() {
  const { register } = useFormContext();
  const handleAddress = () => {
    // TODO: 서버 연동
  };
  return (
    <Container>
      <InputWithButton>
        <FormInput
          type='address'
          placeholder='주소를 입력해주세요'
          {...register('address', { required: true })}
        />
        <Button
          type='button'
          onClick={handleAddress}
          $style='outlined'
          $size='lg'
          $theme='primary'
        >
          검색
        </Button>
      </InputWithButton>
      <InputWrapper>
        <FormInput
          type='industry'
          placeholder='상호명을 입력해주세요'
          {...register('industry', { required: true })}
        />
      </InputWrapper>
    </Container>
  );
}

export default IndustryForm;

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
