import { STORAGE_KEY } from '@/constants/storage';

const useStorageCheck = (key: string, checkFunctionName: string) => {
  const checkValue = () => {
    const value = sessionStorage.getItem(key) || localStorage.getItem(key);
    return value === 'true';
  };

  return { [checkFunctionName]: checkValue() };
};

export const useBlackList = () => {
  return useStorageCheck(STORAGE_KEY.blackList, 'isBlackList');
};

export const useUserType = () => {
  return useStorageCheck(STORAGE_KEY.userType, 'isCompany');
};
