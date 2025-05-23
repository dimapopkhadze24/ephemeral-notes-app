import { createContext, useEffect, useRef, useState } from "react";
import { ProfileContextI, ProfileI, ProfileProviderI } from "@/types";
import Corestore from "corestore";
import Hyperdrive from "hyperdrive";

export const ProfileContext = createContext<ProfileContextI | undefined>(
  undefined
);

export const ProfileProvider = ({ children, config }: ProfileProviderI) => {
  const [profile, setProfile] = useState<ProfileI | null>(null);
  const [loaded, setLoaded] = useState(false);

  const newCorestore = new Corestore(config.storage);
  const corestoreRef = useRef(newCorestore);

  const newHyperdrive = new Hyperdrive(corestoreRef.current);
  const hyperdriveRef = useRef(newHyperdrive);

  const initProfile = async () => {
    const exists = await hyperdriveRef.current.exists("/meta/profile.json");
    if (exists) return;

    await updateProfile({ name: "New user" });
  };

  const getProfile = async () => {
    const buf = await hyperdriveRef.current.get("/meta/profile.json");

    if (!buf) return;
    setProfile(JSON.parse(buf));
  };
  useEffect(() => {
    hyperdriveRef.current
      .ready()
      .then(initProfile)
      .then(getProfile)
      .then(() => setLoaded(true));
  }, [hyperdriveRef]);

  useEffect(() => {
    const profileWatcher = hyperdriveRef.current.watch("/meta", {
      recursive: false,
    });

    watchForever();
    async function watchForever() {
      for await (const _ of profileWatcher) {
        await getProfile();
      }
    }

    return () => {
      profileWatcher.destroy().catch(console.error);
    };
  }, [hyperdriveRef.current]);

  const updateProfile = async (profile: Partial<ProfileI>) => {
    await hyperdriveRef.current.put(
      "/meta/profile.json",
      Buffer.from(JSON.stringify(profile))
    );
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loaded,
        updateProfile,
        corestore: corestoreRef.current,
        hyperdrive: hyperdriveRef.current,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
