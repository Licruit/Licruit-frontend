import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop';
import MyPageSideMenu from '@/features/SideMenu/components/Mypage/MyPageSideMenu';
import { useMyPageIsOpenStore } from '@/store/mypageSideMenuStore';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalErrorBoundary from './GlobalErrorBoundary';

function MainLayout() {
  const { isOpen, close } = useMyPageIsOpenStore();
  return (
    <>
      <Header />
      <GlobalErrorBoundary>
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

export default MainLayout;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
`;
