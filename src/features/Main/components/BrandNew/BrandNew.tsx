import styled from 'styled-components';
import { useState } from 'react';
import Catalog from './Catalog';

function BrandNew() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <BrandNewContainer>
      <Catalog setImageUrl={setImageUrl} />
      <div className='img-wrapper'>
        <img src={imageUrl} alt='liquor' />
      </div>
    </BrandNewContainer>
  );
}

const BrandNewContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 785px;

  .img-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default BrandNew;
