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
import GlobalErrorBoundary from '@/layouts/GlobalErrorBoundary';
import NotFoundPage from '@/pages/NotFoundPage';
import PublicRoutes from './PublicRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <GlobalErrorBoundary>
        <MainLayout />
      </GlobalErrorBoundary>
    ),
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
      {
        path: 'management',
        element: <ManagementPage />,
      },
      {
        path: 'buyerManagement',
        element: <BuyerDetailPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: (
      <GlobalErrorBoundary>
        <PublicRoutes />
      </GlobalErrorBoundary>
    ),
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
    element: (
      <GlobalErrorBoundary>
        <NavContentLayout />
      </GlobalErrorBoundary>
    ),
    children: [
      {
        path: '',
        element: <CatalogPage />,
      },
    ],
  },
  {
    path: '/',
    element: <GroupBuyingLayout />,
    children: [
      {
        path: 'group-buying',
        element: <GroupBuyingPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
