import React from 'react';
import { useFormContext } from 'react-hook-form';
import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';
import Button from '@/components/Button/Button';

function IndustryForm() {
  const { register } = useFormContext();

  const handleAddress = () => {
    // TODO: 업종 api 연동
  };
  return (
    <Container>
      <InputWrapper>
        <InputWithButton>
          <FormInput
            type='string'
            placeholder='주소를 입력해주세요'
            {...register('address', {
              required: true,
            })}
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
      </InputWrapper>
      <FormInput
        type='string'
        placeholder='상호명을 입력해주세요.'
        {...register('businessName', {
          required: true,
        })}
      />
      <FormInput
        isDropdown
        options={[
          { id: 1, name: '한식' },
          { id: 2, name: '일식' },
          { id: 3, name: '중식' },
          { id: 4, name: '양식' },
        ]}
        placeholder='업종 카테고리를 선택해주세요'
      />
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
