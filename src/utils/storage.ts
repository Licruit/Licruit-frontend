import { STORAGE_KEY } from '@/constants/storage';

export const getTokenFromStorage = () => {
  const getTokensFromStorage = (storage: Storage) => ({
    accessToken: storage.getItem(STORAGE_KEY.accessToken),
    refreshToken: storage.getItem(STORAGE_KEY.refreshToken),
  });

  let tokens = getTokensFromStorage(sessionStorage);

  if (!tokens.accessToken || !tokens.refreshToken) {
    tokens = getTokensFromStorage(localStorage);
  }

  return tokens;
};

export const deleteAllFromStorage = () => {
  const removeTokensFromStorage = (storage: Storage) => {
    storage.removeItem(STORAGE_KEY.accessToken);
    storage.removeItem(STORAGE_KEY.refreshToken);
    storage.removeItem(STORAGE_KEY.userType);
  };

  removeTokensFromStorage(sessionStorage);
  removeTokensFromStorage(localStorage);
};

export const saveTokens = (
  isAutoLogin: boolean,
  accessToken: string,
  refreshToken: string,
  isWholesaler: boolean,
  isBlacklist: boolean
) => {
  const storage = isAutoLogin ? localStorage : sessionStorage;
  storage.setItem(STORAGE_KEY.accessToken, accessToken);
  storage.setItem(STORAGE_KEY.refreshToken, refreshToken);
  storage.setItem(STORAGE_KEY.userType, String(isWholesaler));
  storage.setItem(STORAGE_KEY.blackList, String(isBlacklist));
};
