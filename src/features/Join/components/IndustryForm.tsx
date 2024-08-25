import { useRef } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { useClickOutside } from '@/hooks/gesture/useClickOutside';
import FormInput from '@/components/Input/FormInput';
import Button from '@/components/Button/Button';
import Dropdown from '@/components/Input/Dropdown';
import useMap from '../hooks/useMap';
import { useSignup } from '../hooks/useSignup';

function IndustryForm() {
  const { register, watch } = useFormContext();
  const { isPostcodeVisible, handleSelect, openPostcode, closePostcode } =
    useMap();

  const placeRef = useRef<HTMLDivElement>(null);

  const { industryData } = useSignup();
  const address = watch('industry');

  useClickOutside(placeRef, closePostcode);
  return (
    <Container>
      <InputWrapper ref={placeRef}>
        <InputWithButton>
          <StyledFormInput
            type='string'
            placeholder='주소를 입력해주세요'
            readOnly
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
            <div className='post-modal' ref={placeRef}>
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
      <Dropdown
        name='sectorId'
        options={industryData}
        placeholder='업종 카테고리를 선택해주세요'
      />
    </Container>
  );
}

export default IndustryForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const InputWithButton = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;

  .post-modal {
    position: absolute;
    z-index: 10;
    right: 0;
    left: 0;

    border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledFormInput = styled(FormInput)`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.color.neutral[100]};
`;
