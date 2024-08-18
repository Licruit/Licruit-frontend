import styled, { useTheme } from 'styled-components';
import { GlassesIcon, InfoIcon } from 'public/assets/icons';
import { ForwardedRef, forwardRef } from 'react';
import Label from './Label';

interface Props {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  ['aria-label']: string;
  maxLength?: number;
  isRequired?: boolean;
  hasValidation?: boolean;
  isSearch?: boolean;
  hasInfo?: boolean;
}

const ProfileInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      isRequired,
      placeholder,
      value = '',
      hasValidation,
      isSearch = false,
      hasInfo,
      maxLength,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
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
          <Input
            type='text'
            placeholder={placeholder}
            $isSearch={isSearch}
            ref={ref}
            {...props}
            aria-label={props['aria-label']}
          />
        </IconWrapper>
        {hasValidation && (
          <TypeNumber>
            {value.length}/{maxLength}
          </TypeNumber>
        )}
      </InputWrapper>
    );
  }
);

const InputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
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
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

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
