import PATH from '@/constants/path';
import useLoginStore from '@/store/loginStore';
import { deleteAllFromStorage } from '@/utils/storage';
import { useNavigate } from 'react-router-dom';

const useLogOut = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoginStore();

  const handleLogOut = () => {
    deleteAllFromStorage();
    setIsLoggedIn(false);
    navigate(PATH.main);
  };

  return handleLogOut;
};

export default useLogOut;
