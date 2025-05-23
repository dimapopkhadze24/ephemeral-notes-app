import { ReactNode } from "react";

export type ButtonModeT = "primary" | "secondary";
export type ButtonSizeT = "default" | "large";

export interface ButtonI {
  children: ReactNode;
  mode?: ButtonModeT;
  size?: ButtonSizeT;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}
