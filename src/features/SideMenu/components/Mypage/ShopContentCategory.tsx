import styled from 'styled-components';
import ContentInfoHeader from '../common/ContentInfoHeader';
import useShopStatusQuery from '../../hooks/useShopStatusQuery';

interface Props {
  setContent: (content: number) => void;
}

function ShopContentCategory({ setContent }: Props) {
  const { data: shopCurrentStatus } = useShopStatusQuery();

  const statusCounts = shopCurrentStatus
    ? shopCurrentStatus?.map((item) => Number(item.statusCount))
    : [];

  const categories = ['신청현황', '승인대기', '배송중', '배송완료'];

  return (
    <ContentCategoryContainer>
      <ContentInfoHeader />
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

export default ShopContentCategory;
