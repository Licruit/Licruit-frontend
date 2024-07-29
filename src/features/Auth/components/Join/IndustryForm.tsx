import { useEffect, useRef } from 'react';
import DaumPostcode from 'react-daum-postcode';

import { useFormContext } from 'react-hook-form';
import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import useMap from '../../hooks/useMap';
import { useSignup } from '../../hooks/useSignup';

function IndustryForm() {
  const { register } = useFormContext();
  const {
    address,
    isPostcodeVisible,
    handleSelect,
    openPostcode,
    closePostcode,
  } = useMap();
  const modalRef = useRef<HTMLDivElement>(null);
  const { industryData } = useSignup();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closePostcode();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPostcodeVisible, closePostcode]);

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
            defaultValue={address?.address}
          />
          <Button
            type='button'
            onClick={openPostcode}
            $style='outlined'
            $size='lg'
            $theme='primary'
          >
            검색
          </Button>
          {isPostcodeVisible && (
            <div className='postModal' ref={modalRef}>
              <DaumPostcode onComplete={handleSelect} />
            </div>
          )}
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
        options={industryData}
        placeholder='업종 카테고리를 선택해주세요'
        {...register('industry', {
          required: true,
        })}
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
  position: relative;
  width: 100%;
  display: flex;
  gap: 10px;
  .postModal {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
    border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;
