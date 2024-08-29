import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';
import React, { Suspense, useState } from 'react';
import LoadingSpinner from '@/components/Spinner/Spinner';
import GlobalErrorBoundary from '@/layouts/GlobalErrorBoundary';

const Catalog = React.lazy(() => import('./Catalog'));


function BrandNew() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <BrandNewContainer>
      <GlobalErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Catalog setImageUrl={setImageUrl} />
          <div className='img-wrapper'>
            <img src={imageUrl} alt='liquor' loading='lazy' />
          </div>
        </Suspense>
      </GlobalErrorBoundary>
    </BrandNewContainer>
  );
}


export default BrandNew;
  
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
