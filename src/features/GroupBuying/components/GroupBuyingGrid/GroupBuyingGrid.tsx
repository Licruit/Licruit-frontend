import GroupBuyingCard from '@/components/Liquor/GroupBuyingCard';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { useLiquor } from '../../hooks/useLiquor';
import { useIntersectionObs } from '../../hooks/useObserver';

export const mockLiquorData = {
  buyings: [
    {
      id: 1,
      title: '프리미엄 막걸리',
      content: '고급 재료로 만든 프리미엄 막걸리입니다.',
      price: 12000,
      orderCount: 150,
      leftDate: 5,
      liquorName: '프리미엄 막걸리',
      alcohol: '12.0',
      volume: 750,
      categoryName: '막걸리',
      imageUrl: 'path/to/image1.jpg',
    },
    {
      id: 2,
      title: '고구마 소주',
      content: '달콤한 고구마 맛이 일품인 소주입니다.',
      price: 20000,
      orderCount: 90,
      leftDate: 3,
      liquorName: '고구마 소주',
      alcohol: '19.5',
      volume: 500,
      categoryName: '소주',
      imageUrl: 'path/to/image2.jpg',
    },
    {
      id: 3,
      title: '청포도 와인',
      content: '상큼한 청포도의 맛을 느낄 수 있는 와인입니다.',
      price: 30000,
      orderCount: 120,
      leftDate: 10,
      liquorName: '청포도 와인',
      alcohol: '13.0',
      volume: 750,
      categoryName: '와인',
      imageUrl: 'path/to/image3.jpg',
    },
    {
      id: 4,
      title: '전통 쌀 막걸리',
      content: '전통 방식으로 만든 쌀 막걸리입니다.',
      price: 8000,
      orderCount: 230,
      leftDate: 2,
      liquorName: '전통 쌀 막걸리',
      alcohol: '6.0',
      volume: 1000,
      categoryName: '막걸리',
      imageUrl: 'path/to/image4.jpg',
    },
    {
      id: 5,
      title: '블루베리 와인',
      content: '달콤한 블루베리의 풍미가 가득한 와인입니다.',
      price: 25000,
      orderCount: 75,
      leftDate: 7,
      liquorName: '블루베리 와인',
      alcohol: '12.5',
      volume: 750,
      categoryName: '와인',
      imageUrl: 'path/to/image5.jpg',
    },
    {
      id: 5,
      title: '블루베리 와인',
      content: '달콤한 블루베리의 풍미가 가득한 와인입니다.',
      price: 25000,
      orderCount: 75,
      leftDate: 7,
      liquorName: '블루베리 와인',
      alcohol: '12.5',
      volume: 750,
      categoryName: '와인',
      imageUrl: 'path/to/image5.jpg',
    },
    {
      id: 5,
      title: '블루베리 와인',
      content: '달콤한 블루베리의 풍미가 가득한 와인입니다.',
      price: 25000,
      orderCount: 75,
      leftDate: 7,
      liquorName: '블루베리 와인',
      alcohol: '12.5',
      volume: 750,
      categoryName: '와인',
      imageUrl: 'path/to/image5.jpg',
    },
    {
      id: 5,
      title: '블루베리 와인',
      content: '달콤한 블루베리의 풍미가 가득한 와인입니다.',
      price: 25000,
      orderCount: 75,
      leftDate: 7,
      liquorName: '블루베리 와인',
      alcohol: '12.5',
      volume: 750,
      categoryName: '와인',
      imageUrl: 'path/to/image5.jpg',
    },
    {
      id: 5,
      title: '블루베리 와인',
      content: '달콤한 블루베리의 풍미가 가득한 와인입니다.',
      price: 25000,
      orderCount: 75,
      leftDate: 7,
      liquorName: '블루베리 와인',
      alcohol: '12.5',
      volume: 750,
      categoryName: '와인',
      imageUrl: 'path/to/image5.jpg',
    },
    {
      id: 5,
      title: '블루베리 와인',
      content: '달콤한 블루베리의 풍미가 가득한 와인입니다.',
      price: 25000,
      orderCount: 75,
      leftDate: 7,
      liquorName: '블루베리 와인',
      alcohol: '12.5',
      volume: 750,
      categoryName: '와인',
      imageUrl: 'path/to/image5.jpg',
    },
  ],
};

function GroupBuyingGrid() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = searchParams.get('sort');

  const { liquorData, fetchNextPage, hasNextPage } = useLiquor(
    params || 'ranking'
  );
  const { setTarget } = useIntersectionObs({ hasNextPage, fetchNextPage });
  return (
    <Container>
      {liquorData?.pages[0].data.map((item) => {
        return <GroupBuyingCard {...item} />;
      })}
      <div ref={setTarget} style={{ height: '10px' }} />
    </Container>
  );
}

export default GroupBuyingGrid;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
