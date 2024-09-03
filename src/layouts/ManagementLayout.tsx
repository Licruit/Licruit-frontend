import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop';
import MyPageSideMenu from '@/features/SideMenu/components/Mypage/MyPageSideMenu';
import { useMyPageIsOpenStore } from '@/store/mypageSideMenuStore';
import ProductCardWithButton from '@/features/Management/components/ProductCardWithButton';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import GlobalErrorBoundary from './GlobalErrorBoundary';

function ManagementLayout() {
  const { buyingId } = useParams();
  const { isOpen, close } = useMyPageIsOpenStore();

  return (
    <>
      <Header />
      <GlobalErrorBoundary>
        <Container>
          {buyingId && <ProductCardWithButton />}
          <GlobalErrorBoundary size='md'>
            <Outlet />
          </GlobalErrorBoundary>
          {isOpen && <MyPageSideMenu onClose={close} />}
        </Container>
        <Footer />
        <ScrollToTop />
      </GlobalErrorBoundary>
    </>
  );
}

export default ManagementLayout;

const Container = styled.main`
  display: flex;
  gap: 40px;
  width: 100%;
  padding: 20px;
`;
