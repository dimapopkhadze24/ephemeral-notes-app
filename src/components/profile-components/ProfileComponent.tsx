import useAppStore from "@/store/appStore";
import { useProfile } from "@/hooks";
import { BouncingLoader, Button, Flex, Input, Typography } from "@/ui";
import { useState } from "react";
import styled from "styled-components";

const ProfileComponent = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const { updateProfile } = useProfile();
  const { setScreen } = useAppStore();

  const onSaveHandler = async () => {
    setLoading(true);
    await updateProfile(details);
    setScreen("contacts");
    setLoading(false);
  };

  return (
    <ProfileComponentWrapper gap={16}>
      <Typography variant="h2" color="light700">
        Setup Profile
      </Typography>
      <Input
        label="Name"
        value={details.name}
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      <Input
        label="Email"
        value={details.email}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />

      <Button onClick={onSaveHandler} disabled={loading}>
        {loading ? <BouncingLoader /> : "Save"}
      </Button>
    </ProfileComponentWrapper>
  );
};

export default ProfileComponent;

const ProfileComponentWrapper = styled(Flex)`
  max-width: 450px;
  margin: auto;
  width: 100%;
`;
