import { ProfileI } from "@/types";
import Hyperdrive from "hyperdrive";
import { useEffect, useState } from "react";

export const usePeer = (hyperdrive: Hyperdrive) => {
  const [profile, setProfile] = useState<ProfileI | null>(null);

  const getProfile = async () => {
    const buf = await hyperdrive.get("/meta/profile.json");

    const name = await hyperdrive.get("/meta/dima.json");

    if (!buf) return;
    setProfile(JSON.parse(buf));
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    const profileWatcher = hyperdrive.watch("/meta", { recursive: true });

    watchForever();
    async function watchForever() {
      for await (const _ of profileWatcher) {
        await getProfile();
      }
    }

    return () => {
      profileWatcher.destroy();
    };
  }, [hyperdrive]);

  return { profile };
};
