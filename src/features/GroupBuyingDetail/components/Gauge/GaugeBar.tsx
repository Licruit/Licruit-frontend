import styled from 'styled-components';

interface Props {
  goalCount: number;
  currentCount: number;
}

function GaugeBar({ goalCount, currentCount }: Props) {
  const barGauge = (currentCount / goalCount) * 100;

  return (
    <Container>
      <Bar $gauge={barGauge} />
    </Container>
  );
}

export default GaugeBar;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.neutral[200]};
`;

const Bar = styled.div<{ $gauge: number }>`
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ $gauge }) => $gauge}%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.primary[500]};

  transition: all 0.2s ease-in;
`;
