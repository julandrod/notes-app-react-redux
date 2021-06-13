import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toogleDarkMode } from "../../features/notesSlice";

import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={styles.header}>
      <h1>Notes</h1>
      <button
        className={styles.save}
        onClick={() => dispatch(toogleDarkMode())}
      >
        {!darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default Header;
