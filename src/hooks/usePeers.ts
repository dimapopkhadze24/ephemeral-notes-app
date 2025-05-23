import { PeersContext } from "@/store/peersContext";
import { useContext } from "react";

export const usePeers = () => {
  const context = useContext(PeersContext);
  if (context === undefined) {
    throw new Error("usePeers must be used within a PeersProvider");
  }
  return context;
};
