import GroupBuyingCard from '@/components/Liquor/GroupBuyingCard';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useLiquor } from '../../hooks/useLiquor';
import { useIntersectionObs } from '../../hooks/useObserver';
import { GroupBuying } from '../../types/liquor';

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
      {liquorData?.pages.map((item: GroupBuying, index) => {
        return <GroupBuyingCard {...item} key={`${item.id}-${index}`} />;
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
