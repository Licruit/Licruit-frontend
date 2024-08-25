import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function GroupBuyingLayout() {
  return (
    <Container>
      <Header />
      <Grid>
        <Outlet />
      </Grid>
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
