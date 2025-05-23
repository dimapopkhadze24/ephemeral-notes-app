import useAppStore from "@/store/appStore";
import { useProfile, usePeers } from "@/hooks";
import { useEffect } from "react";
import { Loader } from "@/ui";
import StartScreenComponent from "@/components/start-screen-components/StartScreenComponent";
import ProfileComponent from "@/components/profile-components/ProfileComponent";
import ContactsComponent from "@/components/contacts-components/ContactsComponent";

const App = () => {
  const { screen, setScreen } = useAppStore();

  const { loaded: peersLoaded } = usePeers();

  const { loaded: profileLoaded, profile } = useProfile();
  useEffect(() => {
    if (!profileLoaded || !peersLoaded) return;

    if (profile?.name === "New user") {
      setScreen("start");
    } else {
      setScreen("contacts");
    }
  }, [profileLoaded, peersLoaded]);

  if (screen === "loading") return <Loader />;

  if (screen === "start") return <StartScreenComponent />;

  if (screen === "profile") return <ProfileComponent />;

  if (screen === "contacts") return <ContactsComponent />;
};

export default App;
