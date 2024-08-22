import Button from '@/components/Button/Button';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

function GlobalFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <Container>
      <h2>
        일시적인 오류로 인해 정보를 불러오지 못했습니다.
        <br />
        다시 시도해주세요.
      </h2>
      <Button
        type='button'
        $size='md'
        $style='solid'
        $theme='primary'
        onClick={resetErrorBoundary}
      >
        다시 시도
      </Button>
    </Container>
  );
}

export default GlobalFallback;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: ${({ theme }) => theme.color.common[100]};

  h2 {
    font-weight: 600;
    text-align: center;
    ${({ theme }) => theme.typo.heading.bold[24]}
  }
`;
