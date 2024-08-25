import { STORAGE_KEY } from '@/constants/storage';

const useUserType = () => {
  const checkIsCompany = () => {
    const isWholesaler = sessionStorage.getItem(STORAGE_KEY.userType);
    return isWholesaler === 'true';
  };

  return { checkIsCompany };
};

export default useUserType;
