import { ProductCard } from '@/features/Catalog';
import { ButtonProps } from '@/features/Catalog/components/Main/ProductCard';
import MockImage from 'public/assets/images/main/mock-image1 38.svg';

import React from 'react';
import { useLocation } from 'react-router-dom';
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

  let buttonProps: ButtonProps = {
    label: '확정',
    $style: 'solid',
    $theme: 'primary',
  };

  if (location.pathname === '/management') {
    if (location.search === '?achievement') {
      buttonProps = {
        label: '전체확정',
        $style: 'outlined',
        $theme: 'primary',
      };
    } else if (location.search === '?shortfall') {
      buttonProps = {
        label: '미달성',
        $style: 'outlined',
        $theme: 'neutral',
      };
    } else if (location.search === '?cancel') {
      buttonProps = {
        label: '전체경고',
        $style: 'solid',
        $theme: 'primary',
      };
    } else {
      buttonProps = {
        label: '확정',
        $style: 'solid',
        $theme: 'primary',
      };
    }
  }

  return (
    <Constainer>
      <ProductCard
        liquorInfo={liquors}
        headText='총 1500병 신청됐습니다'
        button={buttonProps}
      />
      {children}
    </Constainer>
  );
}

export default ManagementLayout;

const Constainer = styled.div`
  display: flex;
  gap: 40px;
`;
