import { CSSProperties, ReactNode } from "react";

type FlexDirectionT = "row" | "column" | "row-reverse" | "column-reverse";
type JustifyContentT =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItemsT =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

export interface FlexI {
  children: ReactNode;
  direction?: FlexDirectionT;
  justify?: JustifyContentT;
  align?: AlignItemsT;
  gap?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  flex?: string | number;
}
