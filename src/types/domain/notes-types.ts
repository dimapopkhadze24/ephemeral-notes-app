export type NoteOptionT = 1 | 2 | 5 | 10;

export interface NoteOptionsI {
  name: string;
  value: NoteOptionT;
}

export interface NoteI {
  note: string;
  views: NoteOptionT;
  remainingViews: number;
  createdAt: string;
  modifiedAt: string;
  id?: string;
}
