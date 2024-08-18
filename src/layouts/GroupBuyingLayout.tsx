import Header from '@/components/Header/Header';
import Preview from '@/features/GroupBuying/components/Preview';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function GroupBuyingLayout() {
  return (
    <Container>
      <Header />
      <Content>
        <Preview />
        <div className='wrapper'>
          <FormLayout>
            <Outlet />
          </FormLayout>
        </div>
      </Content>
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

const Content = styled.div`
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
