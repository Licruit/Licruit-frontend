import styled from 'styled-components';

export const SignOutDescription = styled.p`
  ${({ theme }) => theme.typo.body.semi_bold[14]};
  color: ${({ theme }) => theme.color.neutral[900]};

  white-space: pre-line;
`;
