import styled from 'styled-components';

function ContentCategory() {
  const user = 'shop';

  return (
    <ContentCategoryContainer>
      <ContentInfoWrapper>
        <ContentTitle>공동구매 현황</ContentTitle>
        <ContentDesc>(* 최근 1년 기준)</ContentDesc>
      </ContentInfoWrapper>
      <CategoryWrapper>
        <CategoryItem>
          <p>{user === 'shop' ? '신청현황' : '공동구매 오픈'}</p>
          <p>2</p>
        </CategoryItem>
        <CategoryItem>
          <p>{user === 'shop' ? '승인대기' : '신청현황'}</p>
          <p>0</p>
        </CategoryItem>
        <CategoryItem>
          <p>{user === 'shop' ? '배송중' : '미달성'}</p>
          <p>0</p>
        </CategoryItem>
        <CategoryItem>
          <p>{user === 'shop' ? '도착완료' : '성사'}</p>
          <p>0</p>
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

const ContentInfoWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  width: 100%;
  padding: 20px 0 20px 20px;

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
  display: flex;
  gap: 61px;
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

export default ContentCategory;
