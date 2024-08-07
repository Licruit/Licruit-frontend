import FormInput from '@/components/Input/FormInput';
import { CheckIcon } from 'public/assets/icons';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function PasswordInput() {
  const { register, trigger, watch } = useFormContext();
  const password = watch('password');

  const hasEng = () => /[a-zA-Z]/.test(password);
  const hasDigit = () => /[0-9]/.test(password);
  const hasValidLength = () =>
    password ? password.length >= 8 && password.length <= 15 : false;

  return (
    <Wrapper>
      <FormInput
        type='password'
        placeholder='비밀번호를 입력해주세요'
        hasVisibility
        {...register('password', {
          required: true,
          onChange: () => {
            trigger('passwordCheck');
          },
          validate: () => {
            const isPasswordValid =
              hasEng() &&
              hasDigit() &&
              hasValidLength() &&
              !/[!@#$%^&*(),.?":{}|<>]/.test(password);
            return isPasswordValid;
          },
        })}
      />
      <div className='requirements'>
        <Requirement $valid={hasEng()}>
          <CheckIcon width={18} height={18} /> 영문
        </Requirement>
        <Requirement $valid={hasDigit()}>
          <CheckIcon width={18} height={18} /> 숫자
        </Requirement>
        <Requirement $valid={hasValidLength()}>
          <CheckIcon width={18} height={18} /> 8-15자 이내
        </Requirement>
      </div>
    </Wrapper>
  );
}

export default PasswordInput;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .requirements {
    width: 100%;
    display: flex;
    gap: 10px;
  }
`;

const Requirement = styled.span<{ $valid: boolean }>`
  ${({ theme }) => theme.typo.body.medium[12]}
  color: ${({ $valid, theme }) =>
    $valid ? theme.color.primary[500] : theme.color.neutral[400]};

  display: flex;
  align-items: center;
  gap: 6px;

  & svg {
    fill: ${({ $valid, theme }) =>
      $valid ? theme.color.primary[500] : theme.color.neutral[400]};
  }
`;
