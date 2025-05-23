import { InputHTMLAttributes } from "react";

export interface InputI extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
