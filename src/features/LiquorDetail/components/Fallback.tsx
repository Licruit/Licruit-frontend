import { AxiosError } from 'axios';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

function Fallback({ error }: FallbackProps) {
  if (error instanceof AxiosError && error.response?.status === 404) {
    return <EmptyReview>아직 리뷰가 없습니다.</EmptyReview>;
  }

  return <div>Fallback</div>;
}

export default Fallback;

const EmptyReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 500px;

  color: ${({ theme }) => theme.color.neutral[600]};
  ${({ theme }) => theme.typo.body.semi_bold[16]}
`;
