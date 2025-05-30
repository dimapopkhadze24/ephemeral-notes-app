import { useProfile } from "@/hooks";
import useAppStore from "@/store/appStore";
import { Button, Input, Typography } from "@/ui";
import { Flex } from "@/ui";
import styled from "styled-components";

const SettingsComponent = () => {
  const { profile, updateProfile } = useProfile();
  const { setScreen } = useAppStore();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    updateProfile({
      name: name as string,
      email: email as string,
    });
  };
  return (
    <Flex gap={32}>
      <Flex direction="row" align="center">
        <Button
          mode="secondary"
          onClick={() => {
            setScreen("contacts");
          }}
        >{`<`}</Button>
        <Typography variant="h2" color="light700">
          Settings
        </Typography>
      </Flex>
      <SettingsFormStyled onSubmit={onSubmitHandler}>
        <Input label="Name" name="name" defaultValue={profile?.name} />
        <Input label="Email" name="email" defaultValue={profile?.email} />
        <Button type="submit">Change Profile</Button>
      </SettingsFormStyled>
    </Flex>
  );
};

export default SettingsComponent;

const SettingsFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
