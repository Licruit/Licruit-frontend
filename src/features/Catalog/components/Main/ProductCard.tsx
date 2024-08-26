import Button from '@/components/Button/Button';
import HeadInfo from '@/features/Main/components/common/HeadInfo';
import { Badge } from '@/styles/components/Badge';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Spinner from '../Spinner';

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
  button?: ButtonProps;
  size: string;
}

function ProductCard({ headText, liquorInfo, onClick, button, size }: Props) {
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
          <Spinner />
        )}
      </ImgContainer>

      <LiquorInfo>
        <Badge $type='black' $size='sm'>
          {liquorInfo.categoryName}
        </Badge>
        <Title>{liquorInfo.name}</Title>
        <LiquorDescription>{liquorInfo.description}</LiquorDescription>
      </LiquorInfo>
      {button && (
        <Button $size='sm' $width='full' {...button}>
          {button.label}
        </Button>
      )}
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

export default ProductCard;
