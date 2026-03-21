import { create } from "zustand";

type SidebarStore = {
  open: boolean;
  toggle: () => void;
  close: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  open: false,
  toggle: () => set((s) => ({ open: !s.open })),
  close: () => set({ open: false }),
}));
