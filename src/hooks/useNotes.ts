import { NoteI } from "@/types";
import Hyperdrive from "hyperdrive";
import { useEffect, useState } from "react";
import { useProfile } from "./useProfile";

export const useNotes = (contactHyperdrive: Hyperdrive) => {
  const [fileKeys, setFileKeys] = useState<string[]>();
  const [sentNotes, setSentNotes] = useState<NoteI[]>([]);
  const [receivedNotes, setReceivedNotes] = useState<NoteI[]>([]);

  const sentNotePath = "/notes/sent";
  const receivedNotePath = "/notes/received";
  const { hyperdrive: userHyperdrive } = useProfile();

  const contactDriveKey = contactHyperdrive.key.toString("hex");
  const { profile } = useProfile();

  const getSentNotes = async () => {
    let notes: NoteI[] = [];

    for await (const file of userHyperdrive.list(
      `${sentNotePath}/${contactDriveKey}`
    )) {
      const message = await userHyperdrive.get(file.key);
      if (!message) continue;

      notes.push(JSON.parse(message));
    }

    setSentNotes(notes);
  };

  const fetchFileKeys = async () => {
    let fileKeys: string[] = [];

    for await (const file of contactHyperdrive.list(
      `${sentNotePath}/${profile?.id}`
    )) {
      fileKeys.push(file.key);
    }

    setFileKeys(fileKeys);
  };

  const checkAndUpdateReceivedNotes = async () => {
    if (!fileKeys) return;

    for (const fileKey of fileKeys) {
      const driveNote = await contactHyperdrive.get(fileKey);

      if (!driveNote) continue;

      const note = JSON.parse(driveNote);

      const noteExists = await userHyperdrive.exists(
        `${receivedNotePath}/${contactDriveKey}/${note.id}.json`
      );

      if (noteExists) continue;

      await userHyperdrive.put(
        `${receivedNotePath}/${contactDriveKey}/${note.id}.json`,
        Buffer.from(JSON.stringify(note))
      );
    }
  };

  const getReceivedNotes = async () => {
    let notes: NoteI[] = [];

    for await (const file of userHyperdrive.list(
      `${receivedNotePath}/${contactDriveKey}`
    )) {
      const message = await userHyperdrive.get(file.key);

      if (!message) continue;

      const parsedMessage = JSON.parse(message);

      if (parsedMessage.remainingViews === 0) continue;

      notes.push(parsedMessage);
    }

    setReceivedNotes(notes);
  };

  const sendNote = async (note: NoteI) => {
    let newNote = note;
    newNote.id = crypto.randomUUID();

    await userHyperdrive.put(
      `${sentNotePath}/${contactDriveKey}/${newNote.id}.json`,
      Buffer.from(JSON.stringify(newNote))
    );

    await getSentNotes();
  };

  const updateNote = async (note: NoteI) => {
    let updatedNote = note;

    if (updatedNote.remainingViews === 0) return;

    if (updatedNote.remainingViews > 0) {
      updatedNote.remainingViews--;
    }

    await userHyperdrive.put(
      `${receivedNotePath}/${contactDriveKey}/${note.id}.json`,
      Buffer.from(JSON.stringify(note))
    );
  };

  useEffect(() => {
    getSentNotes();
    fetchFileKeys();
  }, []);

  useEffect(() => {
    checkAndUpdateReceivedNotes().then(getReceivedNotes);
  }, [fileKeys]);

  useEffect(() => {
    const notesWatcher = userHyperdrive.watch(sentNotePath, {
      recursive: true,
    });

    watchForever();
    async function watchForever() {
      for await (const _ of notesWatcher) {
        await getSentNotes();
      }
    }

    return () => {
      notesWatcher.destroy();
    };
  }, [userHyperdrive]);

  useEffect(() => {
    const contactNotesWatcher = contactHyperdrive.watch(sentNotePath, {
      recursive: true,
    });

    watchForever();
    async function watchForever() {
      for await (const _ of contactNotesWatcher) {
        await fetchFileKeys();
      }
    }

    return () => {
      contactNotesWatcher.destroy();
    };
  }, [contactHyperdrive]);

  return { sentNotes, receivedNotes, sendNote, updateNote };
};
