import React from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { searchNotes } from "../../features/notesSlice";

import styles from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.search}>
      <MdSearch className={styles.searchIcons} size="1.3em" />
      <input
        type="text"
        onChange={(e) => dispatch(searchNotes(e.target.value))}
        placeholder="Type to search ..."
      />
    </div>
  );
};

export default Search;
