import Header from '@/components/Header/Header';
import { CatalogHeader } from '@/features/Catalog';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function NavContentLayout() {
  return (
    <>
      <Content>
        <Header />
        <CatalogHeader />
      </Content>
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

const Content = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;
