/// <reference path="./types/modules/pear.d.ts" />
import { createRoot } from "react-dom/client";
import App from "./containers/app-container/App";
import { ProfileProvider } from "./store/profileContext";
import { PeersProvider } from "./store/peersContext";
import { Flex } from "./ui";

const { app } = await Pear.versions();
const element = document.getElementById("root");
if (!element) {
  throw new Error("element not found");
}

const root = createRoot(element);
root.render(
  <ProfileProvider config={Pear.config}>
    <PeersProvider
      name={"ephemeral-notes-app"}
      topic={
        app.key ||
        "57337a386673415371314f315a6d386f504576774259624e32446a7377393752"
      }
    >
      <Flex flex={1}>
        <App />
      </Flex>
    </PeersProvider>
  </ProfileProvider>
);
