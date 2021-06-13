import { Header, NoteList, Search } from "./components";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/notesSlice";

import styles from "./App.module.css";

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={darkMode ? styles.darkMode : ""}>
      <div className={styles.container}>
        <Header />
        <Search />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
