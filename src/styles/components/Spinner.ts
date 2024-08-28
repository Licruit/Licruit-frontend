import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.color.neutral[200]};
  border-top: 4px solid ${({ theme }) => theme.color.primary[500]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
