import { IMAGES } from '@/constants/images';
import styled from 'styled-components';

function Banner() {
  return (
    <Container>
      <img src={IMAGES.banner} alt='banner' loading='eager' />
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 480px;
`;
