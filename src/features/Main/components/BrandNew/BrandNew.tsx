import styled from 'styled-components';
import { Suspense, useState } from 'react';
import LoadingSpinner from '@/components/Spinner/Spinner';
import GlobalErrorBoundary from '@/layouts/GlobalErrorBoundary';
import Catalog from './Catalog';

function BrandNew() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <BrandNewContainer>
      <GlobalErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Catalog setImageUrl={setImageUrl} />
          <div className='img-wrapper'>
            <img src={imageUrl} alt='liquor' />
          </div>
        </Suspense>
      </GlobalErrorBoundary>
    </BrandNewContainer>
  );
}

export default BrandNew;

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
