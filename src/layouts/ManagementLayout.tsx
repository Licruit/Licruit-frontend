import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import HeaderWithSearch from '@/components/Header/HeaderWithSearch';
import { ProductCard } from '@/features/Catalog';
import { ButtonProps } from '@/features/Catalog/components/Main/ProductCard';
import MockImage from 'public/assets/images/main/mock-image1 38.svg';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const liquors = {
  img: MockImage,
  categoryName: '마감',
  name: '홉미드',
  description: '고세종고세종고세종고세종고세종',
};

function ManagementLayout() {
  const location = useLocation();
  const { buyingId, orderId } = useParams();

  let headText: string | undefined = `총 ${1500}병 신청됐습니다`;
  let buttonProps: ButtonProps = {
    label: '확정',
    $style: 'solid',
    $theme: 'primary',
  };

  const src = location.search;

  if (buyingId) {
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
    <>
      {orderId ? <Header /> : <HeaderWithSearch />}
      <Container>
        <ProductCard
          liquorInfo={liquors}
          headText={headText}
          button={buttonProps}
          size='264'
        />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default ManagementLayout;

const Container = styled.main`
  width: 100%;
  display: flex;
  gap: 40px;
  padding: 20px;
`;
