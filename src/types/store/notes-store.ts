import Hyperdrive from "hyperdrive";

export interface ChatStoreI {
  contactHyperdrive?: Hyperdrive;
  setContactHyperdrive: (hyperdrive: Hyperdrive) => void;
}

export interface ProfileI {
  id?: string;
  name?: string;
  email?: string;
  // Add other profile fields as needed
}
