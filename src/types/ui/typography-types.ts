import { ReactNode } from "react";

export type TypographyColorT = "light500" | "brandMain" | "light700";
export type TypographyVariantT =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface TypographyI {
  children: ReactNode;
  color?: TypographyColorT;
  hover?: TypographyColorT;
  variant?: TypographyVariantT;
  className?: string;
}
