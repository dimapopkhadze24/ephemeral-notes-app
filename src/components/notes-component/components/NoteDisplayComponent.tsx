import React, { useState } from "react";
import { NoteDisplayI } from "@/types";
import styled from "styled-components";
import { Flex, Typography } from "@/ui";

const NoteDisplayComponent: React.FC<NoteDisplayI> = ({
  updateNote,
  ShowNote,
  ...rest
}) => {
  const { remainingViews, note } = rest;
  const [displayNote, setDisplayNote] = useState(ShowNote);

  const onNoteClickHandler = () => {
    if (displayNote) return;
    updateNote?.(rest);
    setDisplayNote(true);
  };

  return (
    <NoteDisplayStyled shownote={displayNote} onClick={onNoteClickHandler}>
      {displayNote ? (
        <Typography variant="h5">{note}</Typography>
      ) : (
        <Typography variant="h5">
          Show Note. Remaining views: {remainingViews}
        </Typography>
      )}
    </NoteDisplayStyled>
  );
};

export default NoteDisplayComponent;

const NoteDisplayStyled = styled(Flex)<{ shownote: boolean }>`
  padding: 12px 16px;
  border-radius: 12px;
  background-color: var(--primary-light-color-700);
  border: 1px solid var(--primary-light-color-500);
  cursor: ${({ shownote }) => (shownote ? "default" : "pointer")};
`;
