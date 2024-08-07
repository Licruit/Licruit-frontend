import styled from 'styled-components';
import Label from './Label';

interface Props {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  hasValidation?: boolean;
}

function ProfileInput({
  label,
  isRequired,
  placeholder,
  hasValidation,
}: Props) {
  return (
    <InputWrapper>
      <Label label={label} isRequired={isRequired} />
      <Input type='text' placeholder={placeholder} />
      {hasValidation && <TypeNumber>3/25</TypeNumber>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 17px 18px;
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
`;

const TypeNumber = styled.div`
  position: absolute;
  right: 18px;
  bottom: 17px;

  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default ProfileInput;
