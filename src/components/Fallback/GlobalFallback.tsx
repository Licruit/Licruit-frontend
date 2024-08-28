import Button from '@/components/Button/Button';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

interface Props extends FallbackProps {
  size?: 'sm' | 'md' | 'lg';
}

function GlobalFallback({ resetErrorBoundary, size = 'lg' }: Props) {
  return (
    <Container>
      <TextBox $size={size}>
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
          $size={size}
          $style='outlined'
          $width='full'
          $theme='primary'
          onClick={resetErrorBoundary}
        >
          다시 시도
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
  padding: 30px 0;

  width: 100%;
  background-color: ${({ theme }) => theme.color.common[100]};

  .button-wrapper {
    width: 300px;
  }
`;

const TextBox = styled.div<{ $size: 'sm' | 'md' | 'lg' }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.color.neutral[900]};
    ${({ $size, theme }) => {
      if ($size === 'sm') {
        return theme.typo.heading.bold[14];
      }
      if ($size === 'md') {
        return theme.typo.heading.bold[24];
      }
      return theme.typo.heading.bold[30];
    }}
  }

  p {
    color: ${({ theme }) => theme.color.neutral[400]};
    ${({ $size, theme }) => {
      if ($size === 'sm') {
        return theme.typo.body.semi_bold[12];
      }
      if ($size === 'md') {
        return theme.typo.body.semi_bold[14];
      }
      return theme.typo.body.semi_bold[16];
    }}
  }
`;
