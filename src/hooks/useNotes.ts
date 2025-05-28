import { NoteI } from "@/types";
import Hyperdrive from "hyperdrive";
import { useEffect, useState } from "react";

export const useNotes = (contactId: string, hyperdrive: Hyperdrive) => {
  const [notes, setNotes] = useState<NoteI[]>([]);

  const getNotes = async () => {
    for await (const file of hyperdrive.list(`/notes/${contactId}`)) {
      console.log("list", file); // => { key, value }
    }

    // if (!buf) return;
    // setNotes(JSON.parse(buf));
  };

  const putNotes = async (note: NoteI) => {
    let newNote = note;
    newNote.id = crypto.randomUUID();

    await hyperdrive.put(
      `/notes/${contactId}/${newNote.id}.json`,
      Buffer.from(JSON.stringify(newNote))
    );
  };
  const updateNotes = async (note: NoteI) => {
    let updatedNote = note;
    if (updatedNote.remainingViews > 0) {
      updatedNote.remainingViews--;
    }

    if (updatedNote.remainingViews === 0) {
      await hyperdrive.del(`/notes/${contactId}/${note.id}.json`);
      return;
    }

    await hyperdrive.put(
      `/notes/${contactId}/${note.id}.json`,
      Buffer.from(JSON.stringify(note))
    );
  };

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    const notesWatcher = hyperdrive.watch("/meta", { recursive: false });

    watchForever();
    async function watchForever() {
      for await (const _ of notesWatcher) {
        await getNotes();
      }
    }

    return () => {
      notesWatcher.destroy();
    };
  }, [hyperdrive]);

  return { notes, putNotes, updateNotes };
};
