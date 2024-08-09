import { STORAGE_KEY } from '@/constants/storage';
import useSessionStore from '@/store/sessionStore';
import { useNavigate } from 'react-router-dom';

const useLogOut = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useSessionStore((state) => state.setIsLoggedIn);

  // TODO useType도 삭제
  const handleLogOut = () => {
    sessionStorage.removeItem(STORAGE_KEY.accessToken);
    sessionStorage.removeItem(STORAGE_KEY.refreshToken);
    setIsLoggedIn(false);
    navigate('/');
  };

  return handleLogOut;
};

export default useLogOut;
