import Header from '@/components/Header/Header';
import { Poster } from 'public/assets/images';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function AuthLayout() {
  return (
    <Container>
      <Header />
      <Content>
        <Poster style={{ height: '100%', width: 'auto' }} />
        <div className='wrapper'>
          <FormLayout>
            <Outlet />
          </FormLayout>
        </div>
      </Content>
    </Container>
  );
}

export default AuthLayout;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const Content = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100vh - 70px);

  .wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  width: 100%;
  max-width: 480px;
  margin: 50px;
`;
