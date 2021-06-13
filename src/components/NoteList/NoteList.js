import React from "react";
import { useSelector } from "react-redux";
import { AddNote, Note, EditNote } from "..";
import {
  selectEditNote,
  selectNotes,
  selectResults,
  selectSearchText,
} from "../../features/notesSlice";

import styles from "./NoteList.module.css";

const NoteList = () => {
  let notes = useSelector(selectNotes);
  const searchResults = useSelector(selectResults);
  const searchText = useSelector(selectSearchText);
  const edit = useSelector(selectEditNote);

  if (searchText.length > 0) {
    notes = searchResults;
  }

  return (
    <div className={styles.notesList}>
      <AddNote />
      {notes.map((note) =>
        edit.id === note.id && edit.state ? (
          <EditNote
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
          />
        ) : (
          <Note 
            key={note.id} 
            id={note.id} 
            text={note.text} 
            date={note.date} 
          />
        )
      )}
    </div>
  );
};

export default NoteList;
