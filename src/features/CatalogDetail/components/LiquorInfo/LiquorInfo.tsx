import styled from 'styled-components';
import { useState } from 'react';
import InfoTap from './InfoTap';

function LiquorInfo() {
  const [currentTap, setCurrentTap] = useState('정보');

  return (
    <Container>
      <InfoTap currentTap={currentTap} setCurrentTap={setCurrentTap} />
      {currentTap === '정보' && <div>정보</div>}
      {currentTap === '리뷰' && <div>리뷰</div>}
    </Container>
  );
}

export default LiquorInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
`;
