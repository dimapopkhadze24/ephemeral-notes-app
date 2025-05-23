import { AppScreen } from "@/types";

export interface AppStoreI {
  screen: AppScreen;
  setScreen: (screen: AppScreen) => void;
}
