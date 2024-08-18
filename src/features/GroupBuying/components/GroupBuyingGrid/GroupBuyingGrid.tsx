import GroupBuyingCard from '@/components/Liquor/GroupBuyingCard';
import styled from 'styled-components';
import { useLiquor } from '../../hooks/useLiquor';

function GroupBuyingGrid() {
  const { liquorData } = useLiquor();
  return (
    <Container>
      {liquorData?.buyings.map((item) => {
        return <GroupBuyingCard {...item} />;
      })}
    </Container>
  );
}

export default GroupBuyingGrid;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
