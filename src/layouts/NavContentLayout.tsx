import Header from '@/components/Header/Header';
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
    </>
  );
}

export default NavContentLayout;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
