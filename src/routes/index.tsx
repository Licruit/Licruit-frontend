import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import FindPasswordPage from '@/pages/FindPasswordPage';
import GroupBuyingPage from '@/pages/GroupBuyingPage';
import GroupBuyingDetailPage from '@/pages/GroupBuyingDetailPage';
import CatalogPage from '@/pages/CatalogPage';
import ManagementPage from '@/pages/ManagementPage';
import MainLayout from '@/layouts/MainLayout';
import CatelogDetailPage from '@/pages/CatelogDetailPage';
import PublicRoutes from './PublicRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'group-buying',
        element: <GroupBuyingPage />,
      },
      {
        path: 'group-buying/:id',
        element: <GroupBuyingDetailPage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
      {
        path: 'catalog/:id',
        element: <CatelogDetailPage />,
      },
      {
        path: 'management',
        element: <ManagementPage />,
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
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
