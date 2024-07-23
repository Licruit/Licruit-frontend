import { forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  // fieldName: 'nickname' | 'password';
  // hasVisibility?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, Props>((props: Props) => {
  return <StyledInput {...props} />;
});

export default FormInput;

const StyledInput = styled.input`
  width: 100%;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;
