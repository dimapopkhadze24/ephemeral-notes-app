import useAppStore from "@/store/appStore";
import { useProfile, usePeers } from "@/hooks";
import { useEffect } from "react";
import { Loader } from "@/ui";
import StartScreenComponent from "@/components/start-screen-components/StartScreenComponent";
import ContactsComponent from "@/components/contacts-components/ContactsComponent";
import NotesComponent from "@/components/notes-component/NotesComponent";
import ProfileSetupComponent from "@/components/profile-setup-components/ProfileComponent";
import SettingsComponent from "@/components/settings-component/SettingsComponent";

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

  if (screen === "profile-setup") return <ProfileSetupComponent />;

  if (screen === "contacts") return <ContactsComponent />;

  if (screen === "notes") return <NotesComponent />;

  if (screen === "settings") return <SettingsComponent />;
};

export default App;
