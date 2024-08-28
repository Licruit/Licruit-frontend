import styled from 'styled-components';
import PATH from '@/constants/path';
import useClickToNavigate from '@/features/Main/hooks/useClickToNavigate';
import ContentInfoHeader from '../common/ContentInfoHeader';
import useCompanyStatusQuery from '../../hooks/useCompanyStatusQuery';

function CompanyContentCategory() {
  const { data: companyCurrentStatus } = useCompanyStatusQuery();
  const { handleClickToNavigate } = useClickToNavigate();

  const statusCounts = companyCurrentStatus || {
    openBuying: 0,
    liquorSum: 0,
    shortfall: 0,
    achievement: 0,
  };

  return (
    <ContentCategoryContainer>
      <ContentInfoHeader />
      <CategoryWrapper>
        <CategoryItem
          className='clickable'
          onClick={() => handleClickToNavigate(PATH.management)}
        >
          <p>공동구매 오픈</p>
          <p>{statusCounts.openBuying}</p>
        </CategoryItem>
        <CategoryItem>
          <p>신청현황</p>
          <p>{statusCounts.liquorSum}</p>
        </CategoryItem>
        <CategoryItem
          className='clickable'
          onClick={() =>
            handleClickToNavigate(`${PATH.management}?filter=shortfall`)
          }
        >
          <p>미달성</p>
          <p>{statusCounts.shortfall}</p>
        </CategoryItem>
        <CategoryItem
          className='clickable'
          onClick={() =>
            handleClickToNavigate(`${PATH.management}?filter=acheivement`)
          }
        >
          <p>성사</p>
          <p>{statusCounts.achievement}</p>
        </CategoryItem>
      </CategoryWrapper>
    </ContentCategoryContainer>
  );
}

const ContentCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.neutral[900]};
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
`;

const CategoryItem = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  p {
    ${({ theme }) => theme.typo.body.medium[14]};
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  .clickble {
    cursor: pointer;
  }
`;

export default CompanyContentCategory;
