import { create } from 'zustand';

interface States {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const createModalStore = () =>
  create<States>((set) => ({
    isOpen: true,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }));

const useMyPageModal = createModalStore();
const useEditProfileModal = createModalStore();

export { useMyPageModal, useEditProfileModal };
