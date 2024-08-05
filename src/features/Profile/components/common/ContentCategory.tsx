import styled from 'styled-components';

function ContentCategory() {
  return (
    <ContentCategoryContainer>
      <ContentInfoWrapper>
        <ContentTitle>공동구매 현황</ContentTitle>
        <ContentDesc>(* 최근 1년 기준)</ContentDesc>
      </ContentInfoWrapper>
      <CategoryWrapper>
        <CategoryItem>
          <p>신청현황</p>
          <p>2</p>
        </CategoryItem>
        <CategoryItem>
          <p>승인대기</p>
          <p>0</p>
        </CategoryItem>
        <CategoryItem>
          <p>배송중</p>
          <p>0</p>
        </CategoryItem>
        <CategoryItem>
          <p>도착완료</p>
          <p>0</p>
        </CategoryItem>
      </CategoryWrapper>
    </ContentCategoryContainer>
  );
}

const ContentCategoryContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.color.neutral[900]};
`;

const ContentInfoWrapper = styled.div`
  width: 100%;

  padding: 20px 0 20px 20px;

  display: flex;
  align-items: center;
  gap: 5px;

  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[900]};
`;

const ContentTitle = styled.div`
  ${({ theme }) => theme.typo.heading.bold[16]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const ContentDesc = styled.p`
  ${({ theme }) => theme.typo.body.semi_bold[12]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

const CategoryWrapper = styled.div`
  width: 100%;

  padding: 20px 40px;

  display: flex;
  gap: 61px;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    ${({ theme }) => theme.typo.body.medium[14]};
    color: ${({ theme }) => theme.color.neutral[900]};
  }
`;

export default ContentCategory;
