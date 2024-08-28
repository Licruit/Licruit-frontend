import { useEffect } from 'react';
import GroupBuyingCard from '@/components/Liquor/GroupBuyingCard';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useLiquor } from '../../hooks/useLiquor';
import { GroupBuying } from '../../types/liquor';

interface Props {
  region?: string | null;
  sort?: string | null;
}
function GroupBuyingGrid({ region, sort }: Props) {
  const { liquorData, fetchNextPage } = useLiquor(
    sort || 'ranking',
    region || null
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <Container>
      {liquorData?.pages.map((item: GroupBuying, i: number) => {
        // eslint-disable-next-line react/no-array-index-key
        return <GroupBuyingCard {...item} key={`${item.id}-${i}`} />;
      })}
      <div ref={ref} style={{ height: '10px' }} />
    </Container>
  );
}

export default GroupBuyingGrid;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(374px, 1fr));
  gap: 20px;

  @media (width <= 1230px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
