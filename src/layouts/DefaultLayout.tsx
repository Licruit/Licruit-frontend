import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DefaultLayout;
