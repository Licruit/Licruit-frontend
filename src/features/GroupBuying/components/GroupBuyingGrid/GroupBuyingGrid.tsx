import GroupBuyingCard from '@/components/Liquor/GroupBuyingCard';
import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';
import styled from 'styled-components';

const groupBuyingCardData = {
  headText: '1400명 신청',
  title: '우아하고 순수한 첫번째 고래백경 13. 탁주',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin',
  badgeText: '오늘마감',
  imageUrl: LiquorUrl,
};

function GroupBuyingGrid() {
  return (
    <Container>
      <GroupBuyingCard {...groupBuyingCardData} />
      <GroupBuyingCard {...groupBuyingCardData} />
      <GroupBuyingCard {...groupBuyingCardData} />
      <GroupBuyingCard {...groupBuyingCardData} />
    </Container>
  );
}

export default GroupBuyingGrid;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
