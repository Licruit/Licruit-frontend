import PATH from '@/constants/path';
import AuthLayout from '@/layouts/AuthLayout';
import useLoginStore from '@/store/loginStore';
import { Navigate } from 'react-router-dom';

function PublicRoutes() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  return isLoggedIn ? <Navigate to={PATH.main} /> : <AuthLayout />;
}

export default PublicRoutes;
