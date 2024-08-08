import { STORAGE_KEY } from '@/constants/storage';

export const getTokenFromStorage = () => {
  return {
    accessToken: sessionStorage.getItem(STORAGE_KEY.accessToken),
    refreshToken: sessionStorage.getItem(STORAGE_KEY.refreshToken),
  };
};

export const deleteTokenFromStorage = () => {
  return {
    accessToken: sessionStorage.removeItem(STORAGE_KEY.accessToken),
    refreshToken: sessionStorage.removeItem(STORAGE_KEY.refreshToken),
  };
};
