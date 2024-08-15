import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';

function CatalogList() {
  return (
    <CatalogListContainer>
      <CatalogListItem>
        <Badge $type='black' $size='sm'>
          과실주
        </Badge>
        <Title>초선의 꿈</Title>
        <Description>
          초선의 꿈 (로제)은 특별한 기념일에 함께 마시면 장밋빛 사랑이 솔솔
          피어날 듯한 연분홍 장미색을 가진 와인으로, 풍부한 장미향과 상큼한 사과
          향은 목 넘김을 부드럽게 해주고 감미롭고 달콤한 맛에 여성분들이
          좋아하는 와인이다.
        </Description>
      </CatalogListItem>
      <CatalogListItem>
        <Badge $type='black' $size='sm'>
          과실주
        </Badge>
        <Title>초선의 꿈</Title>
        <Description>
          초선의 꿈 (로제)은 특별한 기념일에 함께 마시면 장밋빛 사랑이 솔솔
          피어날 듯한 연분홍 장미색을 가진 와인으로, 풍부한 장미향과 상큼한 사과
          향은 목 넘김을 부드럽게 해주고 감미롭고 달콤한 맛에 여성분들이
          좋아하는 와인이다.
        </Description>
      </CatalogListItem>
      <CatalogListItem>
        <Badge $type='black' $size='sm'>
          과실주
        </Badge>
        <Title>초선의 꿈</Title>
        <Description>
          초선의 꿈 (로제)은 특별한 기념일에 함께 마시면 장밋빛 사랑이 솔솔
          피어날 듯한 연분홍 장미색을 가진 와인으로, 풍부한 장미향과 상큼한 사과
          향은 목 넘김을 부드럽게 해주고 감미롭고 달콤한 맛에 여성분들이
          좋아하는 와인이다.
        </Description>
      </CatalogListItem>
    </CatalogListContainer>
  );
}

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[30]};
  color: ${({ theme }) => theme.color.common[0]};
`;

const CatalogListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CatalogListItem = styled.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 6px;

  padding-bottom: 40px;

  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default CatalogList;
