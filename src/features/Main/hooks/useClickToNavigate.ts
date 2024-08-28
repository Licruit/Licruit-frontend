import { useMyPageIsOpenStore } from '@/store/mypageSideMenuStore';
import { useNavigate } from 'react-router-dom';

const useClickToNavigate = () => {
  const navigate = useNavigate();
  const closeSideMenu = useMyPageIsOpenStore((state) => state.close);

  const handleClickToNavigate = (path: string) => {
    closeSideMenu();
    navigate(path);
  };

  return { handleClickToNavigate };
};

export default useClickToNavigate;
