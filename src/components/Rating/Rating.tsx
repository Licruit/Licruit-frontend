import { GlassIcon } from 'public/assets/icons';
import styled from 'styled-components';

function Rating() {
  return (
    <Container>
      <GlassIcon fill='#ADAEB1' width={24} height={24} />
      <GlassIcon fill='#ADAEB1' width={24} height={24} />
      <GlassIcon fill='#ADAEB1' width={24} height={24} />
      <GlassIcon fill='#ADAEB1' width={24} height={24} />
      <GlassIcon fill='#ADAEB1' width={24} height={24} />
    </Container>
  );
}

export default Rating;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
