import styled, { useTheme } from 'styled-components';
import { InfoIcon } from 'public/assets/icons';
import { ForwardedRef, forwardRef, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { formatPhoneNumber, formatPrice } from '@/utils/format';
import Label from './Label';

interface Props {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  'aria-label'?: string;
  maxLength?: number;
  isPrice?: boolean;
  isRequired?: boolean;
  hasValidation?: boolean;
  hasInfo?: boolean;
}

const ProfileInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      isRequired,
      placeholder,
      hasValidation = false,
      isPrice = false,
      hasInfo,
      maxLength,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isInfoShow, setIsInfoShow] = useState(false);
    const theme = useTheme();

    const value: string = useWatch({ name: props.name }) || '';
    const formattedValue = isPrice
      ? formatPrice(value)
      : props.name === 'contact'
        ? formatPhoneNumber(value)
        : value;

    const handleMouseOverOnInfo = () => {
      setIsInfoShow(true);
    };

    const handleMouseOutOnInfo = () => {
      setIsInfoShow(false);
    };

    return (
      <InputWrapper>
        {hasInfo && isInfoShow && (
          <InfoTooltip>
            구매자가 일정 금액 이상을 구매하면 배송비가 무료로 적용됩니다
          </InfoTooltip>
        )}
        <LabelWrapper>
          <Label label={label} isRequired={isRequired} />
          {hasInfo && (
            <InfoIcon
              fill={theme.color.neutral[400]}
              style={{ cursor: 'pointer' }}
              onMouseOver={handleMouseOverOnInfo}
              onMouseOut={handleMouseOutOnInfo}
            />
          )}
        </LabelWrapper>
        <IconWrapper>
          <Input
            type='text'
            placeholder={placeholder}
            ref={ref}
            value={formattedValue}
            maxLength={maxLength}
            {...props}
            aria-label={props['aria-label']}
            $hasValidation={hasValidation}
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
  position: relative;
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Input = styled.input<{ $hasValidation: boolean }>`
  flex: 1;
  padding: ${({ $hasValidation }) =>
    $hasValidation ? '17px 65px 17px 18px' : '17px 18px'};
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

const InfoTooltip = styled.div`
  position: absolute;
  z-index: 999;
  top: -75%;
  left: -33%;

  padding: 12px;

  color: ${({ theme }) => theme.color.neutral[500]};
  ${({ theme }) => theme.typo.body.medium[12]};

  background: rgb(255 255 255 / 80%);
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
`;

export default ProfileInput;
