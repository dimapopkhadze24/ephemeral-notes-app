import { ReactNode } from "react";
import { PeerI } from "../domain";

export interface PeersContextI {
  loaded: boolean;
  peers: PeerI;
}

export interface PeersProviderI {
  children: ReactNode;
  name: string;
  topic: string | Buffer;
}
