import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

function Button({ buttonText, ...props }: Props) {
  return <StyledButton {...props}>{buttonText}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  width: 100%;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  color: ${({ theme }) => theme.color.neutral[50]};
  background-color: ${({ theme }) => theme.color.primary[500]};
`;
