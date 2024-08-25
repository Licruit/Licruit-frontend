import { create } from 'zustand';

type Step = 'my-page' | 'edit-profile' | 'signout' | 'review' | 'group-buying';
type Props = { id?: number; user?: string };

interface MyPageSideMenuStates {
  content: Step;
  props: Props;
  setContent: (content: Step, props?: Props) => void;
}

interface MyPageIsOpenStates {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useMyPageSideMenuStore = create<MyPageSideMenuStates>((set) => ({
  content: 'my-page',
  props: {},
  setContent: (updatedContent: Step, updatedProps?: Props) =>
    set({ content: updatedContent, props: updatedProps }),
}));

export const useMyPageIsOpenStore = create<MyPageIsOpenStates>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
