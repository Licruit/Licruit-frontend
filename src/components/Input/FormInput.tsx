import { EyeOffIcon, EyeOnIcon, GlassesIcon } from 'public/assets/icons';
import { ForwardedRef, forwardRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasVisibility?: boolean;
  hasSearch?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  (
    { hasVisibility, hasSearch, type, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const theme = useTheme();
    return (
      <Wrapper>
        {hasSearch && <Icon fill={theme.color.neutral[600]} />}
        <StyledInput
          type={isVisible ? 'text' : type}
          ref={ref}
          {...props}
          $hasSearch={hasSearch}
        />
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

export const StyledInput = styled.input<{ $hasSearch?: boolean }>`
  width: 100%;
  padding: ${({ $hasSearch }) => ($hasSearch ? '8px 8px 8px 36px' : '18px')};

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

const Icon = styled(GlassesIcon)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
`;
