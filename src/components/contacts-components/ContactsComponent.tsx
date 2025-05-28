import { usePeers, useProfile } from "@/hooks";
import { Flex, Typography } from "@/ui";
import ContactsPeerCard from "./components/ContactsPeerCard";

const ContactsComponent = () => {
  const { profile } = useProfile();
  const { peers } = usePeers();

  return (
    <Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Typography variant="h2" color="light700">
          Contacts
        </Typography>
        <Typography variant="h5" color="light700">
          Hello :{profile?.name}
        </Typography>
      </Flex>
      <Flex gap={16}>
        {Object.entries(peers).map(([key, peer]) => (
          <ContactsPeerCard key={key} hyperdrive={peer.hyperdrive} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ContactsComponent;
