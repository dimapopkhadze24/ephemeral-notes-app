import { Button, Flex, Input, Select, Typography } from "@/ui";
import { noteOptions } from "@/data/notes-options";
import styled from "styled-components";
import useChatStore from "@/store/chatStore";
import Hyperdrive from "hyperdrive";
import { useNotes } from "@/hooks/useNotes";
import { useProfile } from "@/hooks";
import { NoteOptionT } from "@/types";

const NotesComponent = () => {
  const { contactHyperdrive } = useChatStore();

  const { profile } = useProfile();

  const { notes, putNotes, updateNotes } = useNotes(
    profile?.id as string,
    contactHyperdrive as Hyperdrive
  );

  // const profile = usePeer(contactHyperdrive as Hyperdrive);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const notes = formData.get("notes");
    const noteOption = formData.get("note-option");
    if (!notes || !noteOption) return;

    putNotes({
      note: notes.toString(),
      views: noteOption as unknown as NoteOptionT,
      remainingViews: noteOption as unknown as number,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    });
  };
  return (
    <Flex justify="space-between" flex={1}>
      <Flex gap={4} align="center">
        <Typography color="light700" variant="h3">
          Send Ephemeral Notes
        </Typography>
        <Typography variant="h5">
          Send a note to a contact that will be deleted after chosen number of
          views.
        </Typography>
      </Flex>
      <NotesForm onSubmit={onSubmitHandler}>
        <NotesInput label="notes" name="notes" />
        <NotesSelect name="note-option">
          {noteOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </NotesSelect>
        <Button type="submit">Send</Button>
      </NotesForm>
    </Flex>
  );
};

export default NotesComponent;

const NotesSelect = styled(Select)`
  width: 100%;
  max-width: 200px;
`;

const NotesInput = styled(Input)`
  flex: 1;
`;

const NotesForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-end;
`;
