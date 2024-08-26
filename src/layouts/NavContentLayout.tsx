import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { CatalogHeader } from '@/features/Catalog';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function NavContentLayout() {
  return (
    <>
      <Header />
      <CatalogHeader />
      <Container>
        <Outlet />
      </Container>
      <Footer />
      <ScrollToTop />
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
