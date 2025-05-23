import styled from "styled-components";
import { TypographyI, TypographyColorT } from "@/types";

const getColor = (color?: TypographyColorT) => {
  switch (color) {
    case "light500":
      return "var(--primary-light-color-500)";
    case "brandMain":
      return "var(--primary-brand-color-main)";
    case "light700":
      return "var(--primary-light-color-700)";
    default:
      return "var(--primary-light-color-500)";
  }
};

export const Typography = styled.span.attrs<TypographyI>(
  ({ variant = "span" }) => ({
    as: variant,
  })
)<TypographyI>`
  color: ${({ color }) => getColor(color)};
  transition: color 0.2s ease-in-out;

  ${({ hover }) =>
    hover &&
    `
    &:hover {
      color: ${getColor(hover)};
    }
  `}
`;
