import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DownArrowIcon } from 'public/assets/icons';

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  pageGroupCount?: number;
}

// 페이지 그룹 생성 함수
const pageArray = (
  page: number,
  totalItems: number,
  pageGroupCount: number
): number[] => {
  const totalPageArr = Array.from({ length: totalItems }, (_, i) => i + 1);
  const pageGroupArr = [];
  for (let i = 0; i < Math.ceil(totalItems / pageGroupCount); i++) {
    pageGroupArr.push(totalPageArr.splice(0, pageGroupCount));
  }
  return pageGroupArr[Math.floor((page - 1) / pageGroupCount)] || [];
};

// 이동할 페이지 번호 계산 함수
const getPageNum = (
  page: number,
  isNext: boolean,
  pageGroupCount: number
): number => {
  const current = Math.ceil(page / pageGroupCount);
  return isNext ? current * pageGroupCount + 1 : (current - 1) * pageGroupCount;
};

function Pagination({
  totalItems,
  currentPage,
  pageGroupCount = 5,
}: PaginationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(currentPage);

  const isStart = page - pageGroupCount <= 0;
  const isEnd =
    Math.floor((page - 1) / pageGroupCount) ===
    Math.floor((totalItems - 1) / pageGroupCount);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    searchParams.set('page', String(newPage));
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
    setPage(newPage);
  };

  return (
    <Container>
      <MoveButton
        onClick={() =>
          handlePageChange(getPageNum(page, false, pageGroupCount))
        }
        disabled={isStart}
      >
        <DownArrowIcon fill='#ADAEB1' style={{ rotate: '90deg' }} />
      </MoveButton>
      <div className='button-wrapper'>
        {pageArray(page, totalItems, pageGroupCount).map((num) => (
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
        onClick={() => handlePageChange(getPageNum(page, true, pageGroupCount))}
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
