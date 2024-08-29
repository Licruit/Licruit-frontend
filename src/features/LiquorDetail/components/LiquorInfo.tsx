import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingSpinner from '@/components/Spinner/Spinner';
import { Suspense, useState } from 'react';
import TapBar from './TapBar';
import ReviewBox from './ReviewBox/ReviewBox';
import InfoBox from './InfoBox/InfoBox';
import Fallback from './Fallback';

interface Props {
  liquorId: number;
}

function LiquorInfo({ liquorId }: Props) {
  const [currentTap, setCurrentTap] = useState('정보');

  return (
    <Container>
      <TapBar currentTap={currentTap} setCurrentTap={setCurrentTap} />
      <div className='box-wrapper'>
        {currentTap === '정보' && <InfoBox liquorId={liquorId} />}
        {currentTap === '리뷰' && (
          <ErrorBoundary FallbackComponent={Fallback}>
            <Suspense fallback={<LoadingSpinner />}>
              <ReviewBox liquorId={liquorId} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </Container>
  );
}

export default LiquorInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  .box-wrapper {
    width: 100%;
    padding: 20px;
  }
`;
