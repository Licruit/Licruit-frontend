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
  flex: 1;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]}

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;
