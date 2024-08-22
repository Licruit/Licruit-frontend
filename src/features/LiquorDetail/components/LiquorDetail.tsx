import styled from 'styled-components';
import LiquorInfo from './LiquorInfo';
import { useLiquorDetail } from '../hooks/useLiquorDetail';

interface Props {
  liquorId: number | undefined;
  children: React.ReactNode;
}

function LiquorDetail({ liquorId, children }: Props) {
  const { liquorImg } = useLiquorDetail(liquorId);

  return (
    <Container>
      <img src={liquorImg} alt='liquorImage' className='liquor-img' />
      {children}
      <LiquorInfo liquorId={liquorId} />
    </Container>
  );
}

export default LiquorDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .liquor-img {
    align-self: center;
    height: 500px;
  }
`;
