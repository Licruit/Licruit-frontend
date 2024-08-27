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

export interface ButtonProps {
  label: string;
  $style: 'solid' | 'outlined';
  $theme: 'primary' | 'neutral';
}

interface Props {
  headText?: string;
  liquorInfo: LiquorInfo;
  onClick?: () => void;
  size: string;
}

function ProductCard({ headText, liquorInfo, onClick, size }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = liquorInfo.img;
    img.onload = () => setImageLoaded(true);
  }, [liquorInfo.img]);

  return (
    <LiquorInfoContainer $size={size} onClick={onClick}>
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
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LiquorInfoContainer = styled.li<{ $size: string }>`
  cursor: pointer;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: ${({ $size }) => $size}px;

  img {
    overflow: hidden;
    height: ${({ $size }) => $size}px;
  }
`;

const LiquorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
`;

const LiquorDescription = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  color: ${({ theme }) => theme.color.neutral[400]};
  text-overflow: ellipsis;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerBox = styled.div`
  height: 370px;
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 40px;
  height: 40px;

  border: 4px solid ${({ theme }) => theme.color.neutral[200]};
  border-top: 4px solid ${({ theme }) => theme.color.primary[500]};
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;

export default ProductCard;
