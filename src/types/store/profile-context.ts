import Corestore from "corestore";
import Hyperdrive from "hyperdrive";
import { ReactNode } from "react";

export interface ProfileI {
  id?: string;
  name?: string;
  email?: string;
  // Add other profile fields as needed
}

export interface ProfileContextI {
  profile: ProfileI | null;
  loaded: boolean;
  updateProfile: (newProfile: Partial<ProfileI>) => Promise<void>;
  corestore: Corestore;
  hyperdrive: Hyperdrive;
}
export interface ProfileProviderI {
  children: ReactNode;
  config: Pear.Config;
}
