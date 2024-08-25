import styled from 'styled-components';
import ContentInfoHeader from '../common/ContentInfoHeader';
import useCompanyStatusQuery from '../../hooks/useCompanyStatusQuery';

function CompanyContentCategory() {
  const { data: companyCurrentStatus } = useCompanyStatusQuery();

  const statusCounts = companyCurrentStatus || {
    openBuying: 0,
    liquorSum: 0,
    shortfall: 0,
    achievement: 0,
  };

  // TODO: 각 버튼 클릭시 공동구매 목록페이지로 이동
  return (
    <ContentCategoryContainer>
      <ContentInfoHeader />
      <CategoryWrapper>
        <CategoryItem>
          <p>공동구매 오픈</p>
          <p>{statusCounts.openBuying}</p>
        </CategoryItem>
        <CategoryItem>
          <p>신청현황</p>
          <p>{statusCounts.liquorSum}</p>
        </CategoryItem>
        <CategoryItem>
          <p>미달성</p>
          <p>{statusCounts.shortfall}</p>
        </CategoryItem>
        <CategoryItem>
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
  gap: 60px;
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
`;

export default CompanyContentCategory;
