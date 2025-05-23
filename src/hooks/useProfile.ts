import { ProfileContext } from "@/store/profileContext";
import { useContext } from "react";

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
