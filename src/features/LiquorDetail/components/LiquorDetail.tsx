import styled from 'styled-components';
import GlobalErrorBoundary from '@/layouts/GlobalErrorBoundary';
import LiquorInfo from './LiquorInfo';
import { useLiquorDetail } from '../hooks/useLiquorDetail';

interface Props {
  liquorId: number;
  children: React.ReactNode;
}

function LiquorDetail({ liquorId, children }: Props) {
  const { liquorImg } = useLiquorDetail(liquorId);

  return (
    <Container>
      <GlobalErrorBoundary size='md'>
        <img
          src={liquorImg}
          alt='liquorImage'
          className='liquor-img'
          loading='eager'
        />
        {children}
        <LiquorInfo liquorId={liquorId} />
      </GlobalErrorBoundary>
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
