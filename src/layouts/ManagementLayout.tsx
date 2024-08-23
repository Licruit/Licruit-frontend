import { ProductCard } from '@/features/Catalog';
import { ButtonProps } from '@/features/Catalog/components/Main/ProductCard';
import MockImage from 'public/assets/images/main/mock-image1 38.svg';

import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const liquors = {
  img: MockImage,
  categoryName: '마감',
  name: '홉미드',
  description: '고세종고세종고세종고세종고세종',
};

interface Props {
  children: React.ReactNode;
}

function ManagementLayout({ children }: Props) {
  const location = useLocation();
  const { id } = useParams();

  let headText: string | undefined = `총 ${1500}병 신청됐습니다`;
  let buttonProps: ButtonProps = {
    label: '확정',
    $style: 'solid',
    $theme: 'primary',
  };

const src =location.search;

  
  if (id) {
    headText = undefined;
  }
  
  if (src === '?achievement') {
    buttonProps = {
      label: '전체확정',
      $style: 'outlined',
      $theme: 'primary',
    };
  } else if (src === '?shortfall') {
    buttonProps = {
      label: '미달성',
      $style: 'outlined',
      $theme: 'neutral',
    };
  } else if (src === '?cancel') {
    buttonProps = {
      label: '전체경고',
      $style: 'solid',
      $theme: 'primary',
    };
    headText = undefined;
  }

  return (
    <Container>
      <ProductCard
        liquorInfo={liquors}
        headText={headText}
        button={buttonProps}
        size='264'
      />
      {children}
    </Container>
  );
}

export default ManagementLayout;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
