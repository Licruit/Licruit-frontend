import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense } from 'react';
import LoadingSpinner from '@/components/Spinner/Spinner';
import MainPage from '@/pages/MainPage';
import MainLayout from '@/layouts/MainLayout';
import PublicRoutes from './PublicRoutes';

const LoginPage = React.lazy(() => import('@/pages/LoginPage'));
const SignUpPage = React.lazy(() => import('@/pages/SignUpPage'));
const FindPasswordPage = React.lazy(() => import('@/pages/FindPasswordPage'));
const GroupBuyingPage = React.lazy(() => import('@/pages/GroupBuyingPage'));
const GroupBuyingDetailPage = React.lazy(
  () => import('@/pages/GroupBuyingDetailPage')
);
const CatalogPage = React.lazy(() => import('@/pages/CatalogPage'));
const ManagementPage = React.lazy(() => import('@/pages/ManagementPage'));
const BuyerDetailPage = React.lazy(() => import('@/pages/BuyerDetailPage'));
const CatalogDetailPage = React.lazy(() => import('@/pages/CatalogDetailPage'));
const BuyerListPage = React.lazy(() => import('@/pages/BuyerListPage'));
const NavContentLayout = React.lazy(() => import('@/layouts/NavContentLayout'));
const GroupBuyingLayout = React.lazy(
  () => import('@/layouts/GroupBuyingLayout')
);
const ManagementLayout = React.lazy(() => import('@/layouts/ManagementLayout'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'group-buying/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <GroupBuyingDetailPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <BuyerListPage />
          </Suspense>
        ),
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
