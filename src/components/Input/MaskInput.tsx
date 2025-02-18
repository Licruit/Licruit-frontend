import { formatCompanyNumber, formatPhoneNumber } from '@/utils/format';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  maskType: 'contact' | 'companyNumber';
  regExp?: RegExp;
}

function MaskInput({ maskType, regExp, ...props }: Props) {
  const [inputText, setInputText] = useState<string>('');
  const { setValue, register } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputText(
      maskType === 'contact'
        ? formatPhoneNumber(value)
        : formatCompanyNumber(value)
    );
    setValue(maskType, value.replace(/[^\d]/g, ''), { shouldValidate: true });
  };

  return (
    <Wrapper>
      <StyledInput
        value={inputText}
        maxLength={maskType === 'contact' ? 13 : 12}
        onChange={handleChange}
        {...props}
      />
      <HiddenInput
        {...register(maskType, {
          required: true,
          pattern: regExp,
        })}
      />
    </Wrapper>
  );
}

export default MaskInput;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};

  ${({ theme }) => theme.typo.body.medium[14]}
  &::placeholder {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;

  opacity: 0;
`;
