import { Flex } from "@/ui";
import styled from "styled-components";

import { usePeer } from "@/hooks/usePeer";
import { ContactsPeerCardI } from "@/types";
import useAppStore from "@/store/appStore";
import useChatStore from "@/store/chatStore";

const ContactsPeerCard: React.FC<ContactsPeerCardI> = ({ hyperdrive }) => {
  const { profile } = usePeer(hyperdrive);
  const { setScreen } = useAppStore();
  const { setContactHyperdrive } = useChatStore();
  const onContactSelectHandler = () => {
    setScreen("notes");
    setContactHyperdrive(hyperdrive);
  };

  return (
    <StyledContactsPeerCard onClick={onContactSelectHandler}>
      {profile?.name}
    </StyledContactsPeerCard>
  );
};

export default ContactsPeerCard;

export const StyledContactsPeerCard = styled(Flex)`
  background-color: var(--primary-dark-color-700);
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
`;
