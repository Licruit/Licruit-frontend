import { ProductCard } from '@/features/Catalog';
import MockImage from 'public/assets/images/main/mock-image1 38.svg';

import React from 'react';
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
  return (
    <Constainer>
      <ProductCard liquorInfo={liquors} headText='총 1500병 신청됐습니다' />
      {children}
    </Constainer>
  );
}

export default ManagementLayout;

const Constainer = styled.div`
  display: flex;
  gap: 40px;
`;
