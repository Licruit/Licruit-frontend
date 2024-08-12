import HeadInfo from '@/features/Main/components/common/HeadInfo';
import { Badge } from '@/styles/components/Badge';

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface LiquorInfo {
  img: string;
  categoryName: string;
  name: string;
  description: string;
}

interface Props {
  headText?: string;
  liquorInfo: LiquorInfo;
  onClick: () => void;
}

function ProductCard({ headText, liquorInfo, onClick }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = liquorInfo.img;
    img.onload = () => setImageLoaded(true);
  }, [liquorInfo.img]);

  return (
    <LiquorInfoContainer onClick={onClick}>
      {headText && <HeadInfo>{headText}</HeadInfo>}
      <ImgContainer>
        {imageLoaded ? (
          <div className='img'>
            <img src={liquorInfo.img} alt='liquor' />
          </div>
        ) : (
          <SpinnerBox>
            <Spinner />
          </SpinnerBox>
        )}
      </ImgContainer>

      <LiquorInfo>
        <Badge $type='black' $size='sm'>
          {liquorInfo.categoryName}
        </Badge>
        <Title>{liquorInfo.name}</Title>
        <LiquorDescription>{liquorInfo.description}</LiquorDescription>
      </LiquorInfo>
    </LiquorInfoContainer>
  );
}

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[20]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
`;

const LiquorInfoContainer = styled.li`
  width: 100%;
  max-width: 370px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .img {
    overflow: hidden;
  }
  img {
    height: 370px;
  }

  cursor: pointer;
`;

const LiquorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const LiquorDescription = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerBox = styled.div`
  position: relative;
  height: 370px;
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid ${({ theme }) => theme.color.neutral[200]};
  border-top: 4px solid ${({ theme }) => theme.color.primary[500]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export default ProductCard;
