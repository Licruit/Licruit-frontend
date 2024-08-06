import { create } from 'zustand';

type Step = 'my-page' | 'edit-profile' | 'signout' | 'review' | 'group-buying';

interface States {
  content: Step;
  setContent: (value: Step) => void;
}

const useMyPageSideMenuStore = create<States>((set) => ({
  content: 'my-page',
  setContent: (updatedContent) => set({ content: updatedContent }),
}));

export default useMyPageSideMenuStore;
