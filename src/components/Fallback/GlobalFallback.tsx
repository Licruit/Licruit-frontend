import Button from '@/components/Button/Button';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

function GlobalFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <Container>
      <TextBox>
        <h2>잠깐만요, 문제가 생겼어요!</h2>
        <p>
          작은 문제가 생겼어요.
          <br />
          페이지를 새로고침하시거나 잠시 후 다시 시도해 주세요!
        </p>
      </TextBox>

      <div className='button-wrapper'>
        <Button
          type='button'
          $size='lg'
          $style='outlined'
          $width='full'
          $theme='primary'
          onClick={resetErrorBoundary}
        >
          새로고침
        </Button>
      </div>
    </Container>
  );
}

export default GlobalFallback;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${({ theme }) => theme.color.common[100]};

  .button-wrapper {
    width: 300px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.color.neutral[900]};
    ${({ theme }) => theme.typo.heading.bold[30]}
  }

  p {
    color: ${({ theme }) => theme.color.neutral[400]};
    ${({ theme }) => theme.typo.body.semi_bold[16]}
  }
`;
