import { create } from 'zustand';

type Step = 'my-page' | 'edit-profile' | 'signout' | 'review' | 'group-buying';

interface MyPageSideMenuStates {
  content: Step;
  setContent: (value: Step) => void;
}

interface MyPageIsOpenStates {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useMyPageSideMenuStore = create<MyPageSideMenuStates>((set) => ({
  content: 'my-page',
  setContent: (updatedContent) => set({ content: updatedContent }),
}));

export const useMyPageIsOpenStore = create<MyPageIsOpenStates>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
