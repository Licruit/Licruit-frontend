import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import Catalog from './Catalog';

function BrandNew() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <BrandNewContainer>
      <Catalog setImageUrl={setImageUrl} />
      <div className='img-wrapper'>
        {imageUrl && <img key={imageUrl} src={imageUrl} alt='liquor' />}
      </div>
    </BrandNewContainer>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
      object-fit: cover;
      animation: ${fadeIn} 0.5s ease-in-out;
    }
  }
`;

export default BrandNew;
