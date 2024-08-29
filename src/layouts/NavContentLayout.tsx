import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { CatalogHeader } from '@/features/Catalog';
import MyPageSideMenu from '@/features/SideMenu/components/Mypage/MyPageSideMenu';
import { useMyPageIsOpenStore } from '@/store/mypageSideMenuStore';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalErrorBoundary from './GlobalErrorBoundary';

function NavContentLayout() {
  const { isOpen, close } = useMyPageIsOpenStore();

  return (
    <>
      <Header />
      <GlobalErrorBoundary>
        <CatalogHeader />
        <Container>
          <Outlet />
          {isOpen && <MyPageSideMenu onClose={close} />}
        </Container>
        <Footer />
        <ScrollToTop />
      </GlobalErrorBoundary>
    </>
  );
}

export default NavContentLayout;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  padding: 0 20px;
`;
