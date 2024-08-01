import styled from 'styled-components';
import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';
import Catalog from './Catalog';

function BrandNew() {
  return (
    <BrandNewContainer>
      <Catalog />
      <img src={LiquorUrl} alt='liquor' />
    </BrandNewContainer>
  );
}

const BrandNewContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  img {
    height: 100%;
  }
`;

export default BrandNew;
