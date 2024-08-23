import styled from 'styled-components';

export const SignOutDescription = styled.p`
  color: ${({ theme }) => theme.color.neutral[900]};
  white-space: pre-line;
  ${({ theme }) => theme.typo.body.semi_bold[14]};
`;
