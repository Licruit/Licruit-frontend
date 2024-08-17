import styled from 'styled-components';
import LiquorInfo from './LiquorInfo';
import { useLiquorDetail } from '../hooks/useLiquorDetail';

interface Props {
  children: React.ReactNode;
}

function LiquorDetail({ children }: Props) {
  const { liquorDetail } = useLiquorDetail();

  return (
    <Container>
      <img src={liquorDetail?.img} alt='liquorImage' className='liquor-img' />
      {children}
      <LiquorInfo />
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
