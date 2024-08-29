import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense } from 'react';
import LoadingSpinner from '@/components/Spinner/Spinner';
import PublicRoutes from './PublicRoutes';

const MainPage = React.lazy(() => import('@/pages/MainPage'));
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
const MainLayout = React.lazy(() => import('@/layouts/MainLayout'));
const ManagementLayout = React.lazy(() => import('@/layouts/ManagementLayout'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingSpinner />}>
        <NotFoundPage />
      </Suspense>
    ),
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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CatalogDetailPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/management',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ManagementLayout />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ManagementPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <BuyerDetailPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <PublicRoutes />
      </Suspense>
    ),
    children: [
      {
        path: 'login',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: 'signUp',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SignUpPage />
          </Suspense>
        ),
      },
      {
        path: 'find-password',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <FindPasswordPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/catalog',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <NavContentLayout />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CatalogPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/group-buying',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <GroupBuyingLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <GroupBuyingPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
