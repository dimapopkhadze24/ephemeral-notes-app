import { AppStoreI } from "@/types";
import { create } from "zustand";

const useAppStore = create<AppStoreI>()((set) => ({
  screen: "loading",
  setScreen: (screen) => set({ screen }),
}));

export default useAppStore;
