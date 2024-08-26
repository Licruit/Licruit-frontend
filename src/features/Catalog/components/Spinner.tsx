import styled, { keyframes } from 'styled-components';

function LoadingSpinner() {
  return (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  );
}

export default LoadingSpinner;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerBox = styled.div`
  position: relative;

  width: 100%;
  padding-bottom: 100%;
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 40px;
  height: 40px;

  border: 4px solid ${({ theme }) => theme.color.neutral[200]};
  border-top: 4px solid ${({ theme }) => theme.color.primary[500]};
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;
