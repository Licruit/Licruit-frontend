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

export const saveTokens = (
  isAutoLogin: boolean,
  accessToken: string,
  refreshToken: string,
  isWholesaler: boolean
) => {
  const storage = isAutoLogin ? localStorage : sessionStorage;
  storage.setItem(STORAGE_KEY.accessToken, accessToken);
  storage.setItem(STORAGE_KEY.refreshToken, refreshToken);
  storage.setItem(STORAGE_KEY.userType, String(isWholesaler));
};
