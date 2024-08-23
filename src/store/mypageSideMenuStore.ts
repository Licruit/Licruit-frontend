import { create } from 'zustand';

type Step = 'my-page' | 'edit-profile' | 'signout' | 'review' | 'group-buying';

interface MyPageSideMenuStates {
  content: Step;
  id: number | null;
  setContent: (content: Step, id?: number | null) => void;
}

interface MyPageIsOpenStates {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useMyPageSideMenuStore = create<MyPageSideMenuStates>((set) => ({
  content: 'my-page',
  id: null,
  setContent: (updatedContent: Step, updatedId?: number | null) =>
    set({ content: updatedContent, id: updatedId }),
}));

export const useMyPageIsOpenStore = create<MyPageIsOpenStates>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
