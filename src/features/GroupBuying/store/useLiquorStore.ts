import { create } from 'zustand';
import { GroupBuying } from '../types/liquor';

interface LiquorStore {
  hoveredLiquor: GroupBuying | null;
  setHoveredLiquor: (value: GroupBuying | null) => void;
}

export const useLiquorStore = create<LiquorStore>((set) => ({
  hoveredLiquor: null,
  setHoveredLiquor: (value: GroupBuying | null) =>
    set({ hoveredLiquor: value }),
}));
