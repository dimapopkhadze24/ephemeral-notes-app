import { Flex } from "@/ui";
import styled from "styled-components";

import { usePeer } from "@/hooks/usePeer";
import { ContactsPeerCardI } from "@/types";

const ContactsPeerCard: React.FC<ContactsPeerCardI> = ({ hyperdrive }) => {
  const profile = usePeer(hyperdrive);

  return <StyledContactsPeerCard>{profile?.name}</StyledContactsPeerCard>;
};

export default ContactsPeerCard;

export const StyledContactsPeerCard = styled(Flex)`
  background-color: var(--primary-dark-color-700);
  padding: 16px;
  border-radius: 8px;
`;
