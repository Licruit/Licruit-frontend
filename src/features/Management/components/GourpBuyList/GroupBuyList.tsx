import Button from '@/components/Button/Button';
import Pagination from '@/components/Pagination/Pagination';
import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';
import useCompanyGroupBuyListQuery from '../../hooks/useCompanyGroupBuyListQuery';

function GroupBuyList() {
  const { companyGroupBuyList } = useCompanyGroupBuyListQuery();

  if (!companyGroupBuyList) return <></>;

  return (
    <>
      <ContentList>
        {companyGroupBuyList.buyings.map((item) => (
          <ContentItem>
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
            >
              자세히 보기
            </Button>
          </ContentItem>
        ))}
      </ContentList>
      <Pagination
        totalItems={companyGroupBuyList.pagination.totalPage}
        currentPage={companyGroupBuyList.pagination.currentPage}
      />
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
  cursor: pointer;

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

export default GroupBuyList;
