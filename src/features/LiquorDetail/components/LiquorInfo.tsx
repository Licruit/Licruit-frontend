import styled from 'styled-components';
import { useState } from 'react';
import TapBar from './TapBar';
import ReviewBox from './ReviewBox/ReviewBox';
import InfoBox from './InfoBox/InfoBox';

function LiquorInfo() {
  const [currentTap, setCurrentTap] = useState('정보');

  return (
    <Container>
      <TapBar currentTap={currentTap} setCurrentTap={setCurrentTap} />
      <div className='box-wrapper'>
        {currentTap === '정보' && <InfoBox />}
        {currentTap === '리뷰' && <ReviewBox />}
      </div>
    </Container>
  );
}

export default LiquorInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  .box-wrapper {
    width: 100%;
    padding: 20px;
  }
`;
