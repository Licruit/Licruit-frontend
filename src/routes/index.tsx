import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import FindPasswordPage from '@/pages/FindPasswordPage';
import GroupBuyingPage from '@/pages/GroupBuyingPage';
import GroupBuyingDetailPage from '@/pages/GroupBuyingDetailPage';
import CatalogPage from '@/pages/CatalogPage';
import ManagementPage from '@/pages/ManagementPage';
import BuyerDetailPage from '@/pages/BuyerDetailPage';
import NavContentLayout from '@/layouts/NavContentLayout';
import GroupBuyingLayout from '@/layouts/GroupBuyingLayout';
import MainLayout from '@/layouts/MainLayout';
import CatalogDetailPage from '@/pages/CatalogDetailPage';
import ManagementLayout from '@/layouts/ManagementLayout';
import NotFoundPage from '@/pages/NotFoundPage';
import BuyerListPage from '@/pages/BuyerListPage';
import PublicRoutes from './PublicRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'group-buying/:id',
        element: <GroupBuyingDetailPage />,
      },
      {
        path: 'catalog/:id',
        element: <CatalogDetailPage />,
      },
    ],
  },
  {
    path: '/management',
    element: <ManagementLayout />,
    children: [
      {
        path: '',
        element: <ManagementPage />,
      },
      {
        path: ':buyingId',
        element: <BuyerListPage />,
      },
      {
        path: ':buyingId/:orderId',
        element: <BuyerDetailPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <PublicRoutes />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signUp',
        element: <SignUpPage />,
      },
      {
        path: 'find-password',
        element: <FindPasswordPage />,
      },
    ],
  },
  {
    path: '/catalog',
    element: <NavContentLayout />,
    children: [
      {
        path: '',
        element: <CatalogPage />,
      },
    ],
  },
  {
    path: '/group-buying',
    element: <GroupBuyingLayout />,
    children: [
      {
        index: true,
        element: <GroupBuyingPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
