import { usePeers, useProfile } from "@/hooks";
import { Button, Flex, Typography } from "@/ui";
import ContactsPeerCard from "./components/ContactsPeerCard";
import useAppStore from "@/store/appStore";

const ContactsComponent = () => {
  const { profile } = useProfile();
  const { setScreen } = useAppStore();
  const { peers } = usePeers();

  const onSettingsClick = () => {
    setScreen("settings");
  };

  const peersArray = Object.entries(peers);

  return (
    <>
      <Flex direction="row" justify="space-between" align="center">
        <Typography variant="h2" color="light700">
          Contacts
        </Typography>
        <Flex direction="row" gap={8} align="center">
          <Typography variant="h5" color="light700">
            Hello :{profile?.name}
          </Typography>
          <Button mode="secondary" onClick={onSettingsClick}>
            ⚙️
          </Button>
        </Flex>
      </Flex>
      <Flex gap={16} flex={1}>
        {peersArray.length === 0 ? (
          <Flex flex={1} gap={16} justify="center" align="center">
            <Typography variant="h1">No contacts found</Typography>
            <Typography variant="h3" color="light700">
              Add a contact to start sending notes
            </Typography>
          </Flex>
        ) : (
          <>
            {peersArray.map(([key, peer]) => (
              <ContactsPeerCard key={key} hyperdrive={peer.hyperdrive} />
            ))}
          </>
        )}
      </Flex>
    </>
  );
};

export default ContactsComponent;
