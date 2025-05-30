import useAppStore from "@/store/appStore";
import { useProfile } from "@/hooks";
import { BouncingLoader, Button, Input, Typography } from "@/ui";
import { useState } from "react";
import styled from "styled-components";

const ProfileSetupComponent = () => {
  const [loading, setLoading] = useState(false);

  const { updateProfile } = useProfile();
  const { setScreen } = useAppStore();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    await updateProfile({
      name: name as string,
      email: email as string,
    });
    setScreen("contacts");
    setLoading(false);
  };

  return (
    <ProfileComponentWrapper onSubmit={onSubmitHandler}>
      <Typography variant="h2" color="light700">
        Setup Profile
      </Typography>
      <Input label="Name" name="name" />
      <Input label="Email" name="email" />

      <Button type="submit" disabled={loading}>
        {loading ? <BouncingLoader /> : "Save"}
      </Button>
    </ProfileComponentWrapper>
  );
};

export default ProfileSetupComponent;

const ProfileComponentWrapper = styled.form`
  max-width: 450px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
