import { useFormContext } from 'react-hook-form';
import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import { REGEXP } from '../../constants/form';
import PasswordForm from '../common/Form/PasswordForm';

function PasswordWithIdForm() {
  const { register } = useFormContext();

  const handleSendId = () => {
    // TODO: 사업자번호 api 연동
  };
  return (
    <Container>
      <InputWrapper>
        <InputWithButton>
          <FormInput
            type='number'
            placeholder='사업자 등록번호를 입력해주세요'
            {...register('businessId', {
              required: true,
              pattern: REGEXP.businessId,
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
