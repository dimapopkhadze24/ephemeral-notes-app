import { Button, Flex, Input, Select, Typography } from "@/ui";
import { noteOptions } from "@/data/notes-options";
import styled from "styled-components";
import useChatStore from "@/store/chatStore";
import Hyperdrive from "hyperdrive";
import { useNotes } from "@/hooks/useNotes";
import { NoteOptionT } from "@/types";
import useAppStore from "@/store/appStore";
import NoteDisplayComponent from "./components/NoteDisplayComponent";

const NotesComponent = () => {
  const { contactHyperdrive } = useChatStore();
  const { setScreen } = useAppStore();

  const { sentNotes, receivedNotes, sendNote, updateNote } = useNotes(
    contactHyperdrive as Hyperdrive
  );

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const notes = formData.get("notes");
    const noteOption = formData.get("note-option");
    if (!notes || !noteOption) return;

    sendNote({
      note: notes.toString(),
      views: noteOption as unknown as NoteOptionT,
      remainingViews: noteOption as unknown as number,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    }).then(() => {
      // Reset the form
      (e.target as HTMLFormElement).reset();
    });
  };
  return (
    <Flex justify="space-between" flex={1} gap={16}>
      <Flex direction="row" gap={16}>
        <Button
          mode="secondary"
          onClick={() => {
            setScreen("contacts");
          }}
        >{`<`}</Button>
        <Flex gap={4} flex={1}>
          <Typography color="light700" variant="h3">
            Send Ephemeral Notes
          </Typography>
          <Typography variant="h5">
            Send a note to a contact that will be deleted after chosen number of
            views.
          </Typography>
        </Flex>
      </Flex>
      <NoteContainer direction="row" flex={1} gap={8}>
        <Flex flex={1} gap={16}>
          <Typography color="light700" variant="h3">
            Sent Notes
          </Typography>
          <NotesWrapper gap={8}>
            {sentNotes
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((note) => (
                <NoteDisplayComponent {...note} ShowNote={true} key={note.id} />
              ))}
          </NotesWrapper>
        </Flex>
        <Flex flex={1} gap={16}>
          <Typography color="light700" variant="h3">
            Received Notes
          </Typography>
          <NotesWrapper gap={8}>
            {receivedNotes
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((note) => (
                <NoteDisplayComponent
                  {...note}
                  ShowNote={false}
                  updateNote={updateNote}
                  key={note.id}
                />
              ))}
          </NotesWrapper>
        </Flex>
      </NoteContainer>

      <NotesForm onSubmit={onSubmitHandler}>
        <Input
          style={{ flex: 1, alignSelf: "normal" }}
          name="notes"
          placeholder="Type your note here"
        />
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

const NotesForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-end;
`;

const NoteContainer = styled(Flex)`
  max-height: calc(100vh - var(--title-bar-height) - 32px - 83px - 32px);
`;

const NotesWrapper = styled(Flex)`
  overflow-y: auto;
`;
