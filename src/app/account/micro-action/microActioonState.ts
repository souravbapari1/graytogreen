import { create } from "zustand";
import { MicroActionItem } from "./md";

export const useMicroActionState = create<{
  selected: MicroActionItem | null;
  setSelected: (selected: MicroActionItem | null) => void;
}>((set) => ({
  selected: null,
  setSelected: (selected: MicroActionItem | null) => set({ selected }),
}));
