import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getTokenFromStorage } from '../utils/storage';

interface Store {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const getInitialLoginState = (): boolean => {
  const { accessToken, refreshToken } = getTokenFromStorage();
  return Boolean(accessToken && refreshToken);
};

const useLoginStore = create<Store>()(
  persist<Store>(
    (set) => ({
      isLoggedIn: getInitialLoginState(),
      setIsLoggedIn: (value: boolean) => {
        set(() => ({ isLoggedIn: value }));
      },
    }),
    {
      name: 'LoginStore',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useLoginStore;
