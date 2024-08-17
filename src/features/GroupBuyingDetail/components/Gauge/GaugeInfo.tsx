import styled from 'styled-components';
import GaugeBar from './GaugeBar';

function GaugeInfo() {
  return (
    <Container>
      <InfoLine>
        <h2>
          앞으로 <strong>100병</strong> 남았습니다
        </h2>
        <Goal>
          <small>목표병수</small>
          <span>1,500/2,000병</span>
        </Goal>
      </InfoLine>
      <GaugeBar currentCount={1500} goalCount={2000} />
    </Container>
  );
}

export default GaugeInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.neutral[900]};

  h2 {
    ${({ theme }) => theme.typo.heading.bold[30]}
    strong {
      color: ${({ theme }) => theme.color.primary[500]};
    }
  }
`;

const Goal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-end;

  small {
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.neutral[400]};
  }

  span {
    ${({ theme }) => theme.typo.heading.bold[20]}
  }
`;
