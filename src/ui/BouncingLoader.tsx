import { styled } from "styled-components";
import { Flex } from "./flex";

const BouncingContainer = styled(Flex)<{ height?: number }>`
  height: ${(props) => props.height || 40}px;
  width: 100%;
`;

const Dot = styled.div<{ delay: number }>`
  width: 6px;
  height: 6px;
  background-color: var(--primary-brand-color-main, #ff4d4d);
  border-radius: 50%;
  animation: bounce 0.6s infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }
`;

export const BouncingLoader = ({ height }: { height?: number }) => {
  return (
    <BouncingContainer
      justify="center"
      align="center"
      direction={"row"}
      gap={4}
      height={height}
    >
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </BouncingContainer>
  );
};
