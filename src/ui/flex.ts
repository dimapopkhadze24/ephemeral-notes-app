import { FlexI } from "@/types";
import styled from "styled-components";

export const Flex = styled.div<FlexI>`
  display: flex;
  flex-direction: ${({ direction = "column" }) => direction};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  gap: ${({ gap }) => gap && `${gap}px`};
  flex: ${({ flex }) => flex};
  height: ${({ height = "auto" }) => height};
`;
