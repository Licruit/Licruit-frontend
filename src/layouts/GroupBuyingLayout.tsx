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
          <Grid>
            <Outlet />
          </Grid>
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
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;
