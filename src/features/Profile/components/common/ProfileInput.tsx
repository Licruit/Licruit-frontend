import styled, { useTheme } from 'styled-components';
import { GlassesIcon, InfoIcon } from 'public/assets/icons';
import Label from './Label';

interface Props {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  hasValidation?: boolean;
  isSearch?: boolean;
  hasInfo?: boolean;
}

function ProfileInput({
  label,
  isRequired,
  placeholder,
  hasValidation,
  isSearch = false,
  hasInfo,
}: Props) {
  const theme = useTheme();

  return (
    <InputWrapper>
      <LabelWrapper>
        <Label label={label} isRequired={isRequired} />
        {hasInfo && (
          <InfoIcon
            fill={theme.color.neutral[400]}
            style={{ cursor: 'pointer' }}
          />
        )}
      </LabelWrapper>
      <IconWrapper>
        {isSearch && <GlassesIcon fill={theme.color.neutral[400]} />}
        <Input type='text' placeholder={placeholder} $isSearch={isSearch} />
      </IconWrapper>
      {hasValidation && <TypeNumber>3/25</TypeNumber>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Input = styled.input<{ $isSearch: boolean }>`
  flex: 1;
  padding: ${({ $isSearch }) =>
    $isSearch ? '17px 18px 17px 42px ;' : '17px 18px;'};

  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  ${({ theme }) => theme.typo.body.medium[14]};
  &::placeholder {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

const IconWrapper = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 18px;
  }
`;

const TypeNumber = styled.div`
  position: absolute;
  right: 18px;
  bottom: 17px;

  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default ProfileInput;
