import React from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from "../../features/notesSlice";

import styles from "./Note.module.css";

const Note = ({ id, text, date }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.note}>
      <span>{text}</span>
      <div className={styles.noteFooter}>
        <div className={styles.dateFooter}>
          <small>{date}</small>
        </div>
        <div className={styles.iconsFooter}>
          <div className={styles.tooltip}>
            <MdEdit
              className={styles.icon}
              onClick={() => dispatch(editNote({ id, state: true }))}
              size="1.3em"
            />
            <span className={styles.tooltiptext}>Edit</span>
          </div>

          <div className={styles.tooltip}>
            <MdDeleteForever
              className={styles.icon}
              onClick={() => dispatch(deleteNote({ id }))}
              size="1.3em"
            />
            <span className={styles.tooltiptext}>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
