import { AxiosError } from 'axios';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

function EmptyFallback({ error }: FallbackProps) {
  if (error instanceof AxiosError && error.response?.status === 404) {
    return <EmptyBuying>조회할 공동구매 목록이 없습니다.</EmptyBuying>;
  }

  return error;
}

export default EmptyFallback;

const EmptyBuying = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 500px;

  color: ${({ theme }) => theme.color.neutral[600]};
  ${({ theme }) => theme.typo.body.semi_bold[16]}
`;
