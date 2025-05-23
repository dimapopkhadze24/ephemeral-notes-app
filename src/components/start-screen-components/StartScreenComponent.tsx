import { Button, Flex, Typography } from "@/ui";
import useAppStore from "@/store/appStore";

const StartScreenComponent = () => {
  const { setScreen } = useAppStore();
  const onGetStartedHandler = () => {
    setScreen("profile");
  };
  return (
    <Flex gap={32} flex={1} align="center" justify="center">
      <Typography variant="h1">Ephemeral Notes</Typography>
      <Typography variant="h2">
        A simple, ephemeral note-taking app that allows you to create and manage
        notes.
      </Typography>
      <Button onClick={onGetStartedHandler}>Get Started</Button>
    </Flex>
  );
};

export default StartScreenComponent;
