import styled from 'styled-components';
import LiquorIntro from './LiquorIntro/LiquorIntro';
import LiquorInfo from './LiquorInfo/LiquorInfo';

function LiquorDetail() {
  return (
    <Container>
      <div className='temp-img'>임시 이미지</div>
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

  .temp-img {
    background-color: lightgray;
    height: 500px;
  }
`;
