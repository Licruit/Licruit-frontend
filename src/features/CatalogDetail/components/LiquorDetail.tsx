import styled from 'styled-components';
import LiquorIntro from './LiquorIntro/LiquorIntro';
import LiquorInfo from './LiquorInfo/LiquorInfo';

function LiquorDetail() {
  return (
    <Container>
      <LiquorIntro />
      <LiquorInfo />
    </Container>
  );
}

export default LiquorDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
