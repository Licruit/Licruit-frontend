import Button from '@/components/Button/Button';
import Pagination from '@/components/Pagination/Pagination';
import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';

function ManagementPage() {
  return (
    <Container>
      <CategoryTabWrapper>
        <Button $style='outlined' $theme='primary' $size='sm'>
          성사
        </Button>
        <Button $style='outlined' $theme='neutral' $size='sm'>
          미달성내역
        </Button>
      </CategoryTabWrapper>
      <ContentList>
        <ContentItem>
          <ContentImg />
          <ContentInfo>
            <Badge $size='sm' $type='black'>
              마감
            </Badge>
            <h3 className='title'>우아하고 순수한 첫번째 고래 백경 13. 탁주</h3>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit amet, consectetur adipiscin
            </p>
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
        <ContentItem>
          <ContentImg />
          <ContentInfo>
            <Badge $size='sm' $type='black'>
              마감
            </Badge>
            <h3 className='title'>우아하고 순수한 첫번째 고래 백경 13. 탁주</h3>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit amet, consectetur adipiscin
            </p>
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
        <ContentItem>
          <ContentImg />
          <ContentInfo>
            <Badge $size='sm' $type='black'>
              마감
            </Badge>
            <h3 className='title'>우아하고 순수한 첫번째 고래 백경 13. 탁주</h3>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit amet, consectetur adipiscin
            </p>
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
        <ContentItem>
          <ContentImg />
          <ContentInfo>
            <Badge $size='sm' $type='black'>
              마감
            </Badge>
            <h3 className='title'>우아하고 순수한 첫번째 고래 백경 13. 탁주</h3>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit amet, consectetur adipiscin
            </p>
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
        <ContentItem>
          <ContentImg />
          <ContentInfo>
            <Badge $size='sm' $type='black'>
              마감
            </Badge>
            <h3 className='title'>우아하고 순수한 첫번째 고래 백경 13. 탁주</h3>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit amet, consectetur adipiscin
            </p>
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
      </ContentList>
      <Pagination totalItems={3} currentPage={1} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const CategoryTabWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

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

  width: 19%;
`;

const ContentImg = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  background: url('<path-to-image>') lightgray 50% / cover no-repeat;
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
    ${({ theme }) => theme.typo.body.medium[14]};
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;
export default ManagementPage;
