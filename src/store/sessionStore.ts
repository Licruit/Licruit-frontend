import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface Store {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const useSessionStore = create<Store>()(
  devtools(
    persist<Store>(
      (set) => ({
        isLoggedIn: false,
        setIsLoggedIn: (value: boolean) => {
          set(() => ({ isLoggedIn: value }));
        },
      }),
      {
        name: 'SessionStore',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useSessionStore;
