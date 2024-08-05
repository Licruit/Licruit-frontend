import PATH from '@/constants/path';
import AuthLayout from '@/layouts/AuthLayout';
import useSessionStore from '@/store/sessionStore';
import { Navigate } from 'react-router-dom';

function PublicRoutes() {
  const isLoggedIn = useSessionStore((state) => state.isLoggedIn);
  return isLoggedIn ? <Navigate to={PATH.main} /> : <AuthLayout />;
}

export default PublicRoutes;
