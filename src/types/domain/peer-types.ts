import Hyperdrive from "hyperdrive";

export interface PeerI {
  [key: string]: {
    hyperdrive: Hyperdrive;
  };
}
