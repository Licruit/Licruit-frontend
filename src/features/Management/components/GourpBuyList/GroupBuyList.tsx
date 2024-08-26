import Button from '@/components/Button/Button';
import Pagination from '@/components/Pagination/Pagination';
import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PATH from '@/constants/path';
import useCompanyGroupBuyListQuery from '../../hooks/useCompanyGroupBuyListQuery';

function GroupBuyList() {
  const { companyGroupBuyList } = useCompanyGroupBuyListQuery();
  const navigate = useNavigate();

  if (!companyGroupBuyList) return <></>;

  const isEmpty = companyGroupBuyList.buyings.length === 0;

  return (
    <>
      {isEmpty ? (
        <Notice>
          <h1 className='notice'>공동구매 목록이 없습니다</h1>
        </Notice>
      ) : (
        <>
          <ContentList>
            {companyGroupBuyList?.buyings.map((item) => (
              <ContentItem key={item.id}>
                <ContentImg $imageUrl={item.liquorImg} />
                <ContentInfo>
                  <Badge $size='sm' $type='black'>
                    {item.leftDate}일 남음
                  </Badge>
                  <h3 className='title'>{item.title}</h3>
                  <p className='description'>{item.content}</p>
                </ContentInfo>
                <Button
                  $style='outlined'
                  $theme='neutral'
                  $size='sm'
                  $width='full'
                  $transparent
                  onClick={() => navigate(`${PATH.management}/${item.id}`)}
                >
                  자세히 보기
                </Button>
              </ContentItem>
            ))}
          </ContentList>
          <Pagination
            totalItems={companyGroupBuyList?.pagination.totalPage}
            currentPage={companyGroupBuyList?.pagination.currentPage}
          />
        </>
      )}
    </>
  );
}

const ContentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

const ContentItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;

  width: 395px;
`;

const ContentImg = styled.div<{ $imageUrl: string }>`
  aspect-ratio: 1/1;
  width: 100%;
  background: ${({ $imageUrl }) =>
    `url(${$imageUrl}) white 50% / contain no-repeat`};
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .title {
    ${({ theme }) => theme.typo.heading.bold[20]};
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  .description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    ${({ theme }) => theme.typo.body.medium[14]};
    color: ${({ theme }) => theme.color.neutral[400]};
    text-overflow: ellipsis;
  }
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40vh;

  .notice {
    ${({ theme }) => theme.typo.body.semi_bold[16]}
    color: ${({ theme }) => theme.color.neutral[500]}
  }
`;

export default GroupBuyList;
