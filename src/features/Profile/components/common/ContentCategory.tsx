import styled from 'styled-components';
import useUserType from '@/hooks/usertype/useUserType';

interface Props {
  statusCounts: number[];
  setContent: (content: number) => void;
}

function ContentCategory({ statusCounts, setContent }: Props) {
  const { checkIsCompany } = useUserType();

  const isCompany = checkIsCompany();
  const categories = isCompany
    ? ['공동구매 오픈', '신청현황', '미달성', '성사']
    : ['신청현황', '승인대기', '배송중', '배송완료'];

  return (
    <ContentCategoryContainer>
      <ContentInfoWrapper>
        <ContentTitle>공동구매 현황</ContentTitle>
        <ContentDesc>(* 최근 1년 기준)</ContentDesc>
      </ContentInfoWrapper>
      <CategoryWrapper>
        {categories.map((category, index) => (
          <CategoryItem key={category} onClick={() => setContent(index + 1)}>
            <p>{category}</p>
            <p>{statusCounts[index]}</p>
          </CategoryItem>
        ))}
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
