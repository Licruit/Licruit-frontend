import { AxiosError } from 'axios';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

function ProductFallback({ error }: FallbackProps) {
  if (error instanceof AxiosError && error.response?.status === 404) {
    return (
      <Container>
        <p className='main'>원하시는 술을 찾지 못했습니다!</p>
        <p className='sub'>다른 키워드로 검색해 보세요</p>
      </Container>
    );
  }
}

export default ProductFallback;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 262px);

  .main {
    ${({ theme }) => theme.typo.heading.bold[30]};
  }

  .sub {
    ${({ theme }) => theme.typo.body.semi_bold[16]};
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;
