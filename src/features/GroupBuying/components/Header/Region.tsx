import styled from 'styled-components';
import { useRegion } from '../../hooks/useRegion';
import Select from '../RegionSelect';

function Region() {
  const { regionData } = useRegion();
  return (
    <Container>
      <Label>지역 필터링</Label>
      <Select data={regionData} />
    </Container>
  );
}

export default Region;

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Label = styled.div`
  ${({ theme }) => theme.typo.body.semi_bold[14]}
  color: ${({ theme }) => theme.color.neutral[600]};
`;
