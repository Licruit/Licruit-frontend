import { EyeOffIcon, EyeOnIcon } from 'public/assets/icons';
import { ForwardedRef, forwardRef, useState } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasVisibility?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  (
    { hasVisibility, type, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <Wrapper>
        <StyledInput type={isVisible ? 'text' : type} ref={ref} {...props} />
        {hasVisibility && (
          <Visibility
            type='button'
            onClick={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? <EyeOnIcon /> : <EyeOffIcon />}
          </Visibility>
        )}
      </Wrapper>
    );
  }
);

export default FormInput;

const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
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

const Visibility = styled.button`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`;
