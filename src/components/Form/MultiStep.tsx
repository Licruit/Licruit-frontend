import styled from 'styled-components';

interface Props {
  current: number;
  maxStep: number;
}

function MultiStep({ current, maxStep }: Props) {
  return (
    <Container>
      {Array(maxStep)
        .fill(0)
        .map((_, i) => (
          <Bar key={i} $isActive={current >= i + 1} />
        ))}
    </Container>
  );
}

export default MultiStep;

const Container = styled.div`
  width: 100%;
  height: 8px;
  display: flex;
  gap: 6px;
`;

const Bar = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.primary[500] : theme.color.neutral[200]};
  transition: all 0.3s ease-in-out;
`;
