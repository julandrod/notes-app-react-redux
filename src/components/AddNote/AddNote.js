import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../../features/notesSlice";

import styles from "./AddNote.module.css";

const AddNote = () => {
  const dispatch = useDispatch();

  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      dispatch(addNotes({ text: noteText }));

      setNoteText("");
    }
  };

  return (
    <div className={styles.noteNew}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        value={noteText}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <div className={styles.noteFooter}>
        <small>{characterLimit - noteText.length} characters remaining</small>
        <button className={styles.save} onClick={() => handleSaveClick()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
