import Corestore from "corestore";
import Hyperdrive from "hyperdrive";
import { ReactNode } from "react";
import { ProfileI } from "..";

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
