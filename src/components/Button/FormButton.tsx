import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

function FormButton({ buttonText, ...props }: Props) {
  return <StyledButton {...props}>{buttonText}</StyledButton>;
}

export default FormButton;

const StyledButton = styled.button`
  width: 100%;
  padding: 20px;
  ${({ theme }) => theme.typo.heading.bold[14]}
  color: ${({ theme }) => theme.color.neutral[50]};
  background-color: ${({ theme }) => theme.color.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[700]};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.neutral[400]};
    background-color: ${({ theme }) => theme.color.neutral[200]};
  }
`;
