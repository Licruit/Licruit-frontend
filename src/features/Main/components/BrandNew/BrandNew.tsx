import styled from 'styled-components';
import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';
import Catalog from './Catalog';

function BrandNew() {
  return (
    <BrandNewContainer>
      <Catalog />
      <div className='img-wrapper'>
        <img src={LiquorUrl} alt='liquor' />
      </div>
    </BrandNewContainer>
  );
}

const BrandNewContainer = styled.div`
  height: fit-content;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  .img-wrapper {
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
      height: 100%;
    }
  }
`;

export default BrandNew;
