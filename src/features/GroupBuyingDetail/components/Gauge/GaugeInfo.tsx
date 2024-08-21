import styled from 'styled-components';
import { formatNumber } from '@/utils/format';
import GaugeBar from './GaugeBar';

interface Props {
  orderQuantity: number;
  goalQuantity: number;
}

function GaugeInfo({ orderQuantity, goalQuantity }: Props) {
  const remainedQuantity = goalQuantity - orderQuantity;

  return (
    <Container>
      <InfoLine>
        <h2>
          {remainedQuantity > 0 ? (
            <>
              앞으로 <strong>{formatNumber(remainedQuantity)}병</strong>{' '}
              남았습니다
            </>
          ) : (
            <strong>목표병수에 달성하셨습니다!</strong>
          )}
        </h2>
        <Goal>
          <small>목표병수</small>
          <span>
            {formatNumber(orderQuantity)}/{formatNumber(goalQuantity)}병
          </span>
        </Goal>
      </InfoLine>
      <GaugeBar currentQuantity={orderQuantity} goalQuantity={goalQuantity} />
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
