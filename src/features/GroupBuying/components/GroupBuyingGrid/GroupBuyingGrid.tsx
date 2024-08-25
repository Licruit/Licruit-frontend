import GroupBuyingCard from '@/components/Liquor/GroupBuyingCard';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useLiquor } from '../../hooks/useLiquor';
import { useIntersectionObs } from '../../hooks/useObserver';
import { GroupBuying } from '../../types/liquor';

interface Props {
  region?: string | null;
  sort?: string | null;
}
function GroupBuyingGrid({ region, sort }: Props) {
  const { liquorData, fetchNextPage, hasNextPage } = useLiquor(
    sort || 'ranking',
    region || null
  );

  const { setTarget } = useIntersectionObs({ hasNextPage, fetchNextPage });
  return (
    <Container>
      {liquorData?.pages.map((item: GroupBuying) => {
        return <GroupBuyingCard {...item} key={uuidv4()} />;
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
