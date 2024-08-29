import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop';
import MyPageSideMenu from '@/features/SideMenu/components/Mypage/MyPageSideMenu';
import { useMyPageIsOpenStore } from '@/store/mypageSideMenuStore';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalErrorBoundary from './GlobalErrorBoundary';

function GroupBuyingLayout() {
  const { isOpen, close } = useMyPageIsOpenStore();

  return (
    <Container>
      <Header />
      <GlobalErrorBoundary>
        <Grid>
          <Outlet />
        </Grid>
        {isOpen && <MyPageSideMenu onClose={close} />}
        <ScrollToTop />
      </GlobalErrorBoundary>
    </Container>
  );
}

export default GroupBuyingLayout;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Grid = styled.main`
  display: flex;
  flex-direction: column;
`;
