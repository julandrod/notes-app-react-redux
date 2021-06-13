import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editNote } from "../../features/notesSlice";

import styles from "./EditNote.module.css";

const EditNote = ({ id, text, date }) => {
  const dispatch = useDispatch();
  const [editedNote, setEditedNote] = useState({
    id,
    text,
    date,
  });
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setEditedNote({ ...editedNote, text: e.target.value });
    }
  };

  const handleSaveClick = () => {
    if (editedNote.text.trim().length > 0) {
      dispatch(
        editNote({
          id: editedNote.id,
          text: editedNote.text,
          date: editedNote.date,
        })
      );
      setEditedNote({ ...editedNote, text: "" });
    }
  };

  return (
    <div className={styles.noteEdit}>
      <textarea
        rows="8"
        cols="10"
        placeholder={text}
        value={editedNote.text}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <div className={styles.noteFooter}>
        <small>
          {characterLimit - editedNote.text.length} characters remaining
        </small>
        <button className={styles.save} onClick={() => handleSaveClick()}>
          Save Edit
        </button>
      </div>
    </div>
  );
};

export default EditNote;
