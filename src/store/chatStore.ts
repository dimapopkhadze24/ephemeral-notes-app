import { ChatStoreI } from "@/types";
import { create } from "zustand";

const useChatStore = create<ChatStoreI>()((set) => ({
  contactHyperdrive: undefined,
  setContactHyperdrive: (contactHyperdrive) => set({ contactHyperdrive }),
}));

export default useChatStore;
