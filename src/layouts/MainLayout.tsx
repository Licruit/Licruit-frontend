import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function MainLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
`;
