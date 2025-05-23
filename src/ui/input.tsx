import styled from "styled-components";
import { Flex } from "./flex";
import { Typography } from "./typography";
import { InputI } from "@/types";

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid var(--primary-light-color-500);
  border-radius: 4px;
  padding: 0 16px;
`;

export const Input: React.FC<InputI> = ({ label, ...props }) => {
  return (
    <Flex gap={8}>
      {label && <Typography variant="h5">{label}</Typography>}
      <StyledInput {...props} />
    </Flex>
  );
};
