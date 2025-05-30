import { NoteI } from "..";

export interface NoteDisplayI extends NoteI {
  ShowNote: boolean;
  updateNote?: (note: NoteI) => void;
}
