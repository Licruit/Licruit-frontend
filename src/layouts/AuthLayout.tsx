import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';
import Poster from 'public/assets/images/poster.svg?react';
import styled from 'styled-components';

function AuthLayout() {
  return (
    <Container>
      <Header />
      <Content>
        <Poster style={{ height: '100%' }} />
        <div className='wrapper'>
          <Outlet />
        </div>
      </Content>
    </Container>
  );
}

export default AuthLayout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  flex: 1;
  display: flex;

  .wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
