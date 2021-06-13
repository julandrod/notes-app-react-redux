import React from "react";
import { useDispatch } from "react-redux";
import { toogleDarkMode } from "../../features/notesSlice";

import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <h1>Notes</h1>
      <button
        className={styles.save}
        onClick={() => dispatch(toogleDarkMode())}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
