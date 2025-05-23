import styled from "styled-components";
import { ButtonI, ButtonModeT, ButtonSizeT } from "@/types";

const getBackgroundColor = (mode: ButtonModeT) => {
  switch (mode) {
    case "primary":
      return "var(--primary-brand-color-main)";
    case "secondary":
      return "var(--primary-dark-color-700)";
    default:
      return "var(--primary-brand-color-main)";
  }
};

const getHeight = (size: ButtonSizeT) => {
  switch (size) {
    case "large":
      return "48px";
    case "default":
    default:
      return "40px";
  }
};

const getPadding = (size: ButtonSizeT) => {
  switch (size) {
    case "large":
      return "24px";
    case "default":
    default:
      return "16px";
  }
};

export const Button = styled.button.attrs<ButtonI>(({ type = "button" }) => ({
  type,
}))<ButtonI>`
  height: ${({ size = "default" }) => getHeight(size)};
  padding: 0 ${({ size = "default" }) => getPadding(size)};
  background-color: ${({ mode = "primary" }) => getBackgroundColor(mode)};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${({ mode }) =>
    mode === "primary"
      ? "var(--primary-dark-color-main)"
      : "var(--primary-dark-color-700)"};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
