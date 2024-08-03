import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DownArrowIcon } from 'public/assets/icons';
import { PAGE_COUNT, REVIEWS_PER_PAGE } from '@/constants/pagination';

interface PaginationProps {
  totalReviews: number;
  currentPage: number;
}

function Pagination({ totalReviews, currentPage }: PaginationProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [page, setPage] = useState(currentPage);
  const totalPages = Math.ceil(totalReviews / REVIEWS_PER_PAGE);

  const isStart = page - PAGE_COUNT <= 0; // 첫번째 페이지 그룹
  const isEnd =
    Math.floor((page - 1) / PAGE_COUNT) ===
    Math.floor((totalPages - 1) / PAGE_COUNT); // 마지막 페이지 그룹

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  // 페이지 그룹 생성 함수
  const pageArray = (): number[] => {
    const totalPageArr = Array.from({ length: totalPages }, (_, i) => i + 1);
    const pageGroupArr = [];
    for (let i = 0; i < Math.ceil(totalPages / PAGE_COUNT); i++) {
      pageGroupArr.push(totalPageArr.splice(0, PAGE_COUNT));
    }
    return pageGroupArr[Math.floor((page - 1) / PAGE_COUNT)] || [];
  };

  // 이동할 페이지 번호 계산 함수
  const getPageNum = (isNext: boolean) => {
    const current = Math.ceil(page / PAGE_COUNT);
    return isNext ? current * PAGE_COUNT + 1 : (current - 1) * PAGE_COUNT;
  };

  // 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    navigate(`${pathname}?page=${newPage}`, { replace: true });
    setPage(newPage);
  };

  return (
    <Container>
      <MoveButton
        onClick={() => handlePageChange(getPageNum(false))}
        disabled={isStart}
      >
        <DownArrowIcon fill='#ADAEB1' style={{ rotate: '90deg' }} />
      </MoveButton>
      <div className='button-wrapper'>
        {pageArray().map((num) => (
          <PageButton
            key={num}
            $isCurrent={page === num}
            onClick={() => handlePageChange(num)}
          >
            {num}
          </PageButton>
        ))}
      </div>
      <MoveButton
        disabled={isEnd}
        onClick={() => handlePageChange(getPageNum(true))}
      >
        <DownArrowIcon fill='#ADAEB1' style={{ rotate: '-90deg' }} />
      </MoveButton>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;

  .button-wrapper {
    display: flex;
    gap: 4px;
  }
`;

const MoveButton = styled.button<{ disabled: boolean }>`
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.color.neutral[800]};
    }
  }
`;

const PageButton = styled.button<{ $isCurrent: boolean }>`
  padding: 8px 14px;
  cursor: pointer;
  ${({ theme }) => theme.typo.body.semi_bold[14]}

  color: ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.color.neutral[900] : theme.color.neutral[400]};
  border: 1px solid
    ${({ theme, $isCurrent }) =>
      $isCurrent ? theme.color.neutral[900] : theme.color.common[100]};
`;
