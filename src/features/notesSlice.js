import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialNotes = localStorage.getItem("notes-app-redux")
  ? JSON.parse(localStorage.getItem("notes-app-redux"))
  : [];

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: initialNotes,
    searchResults: [],
    searchText: "",
    edit: {},
    darkMode: false,
  },
  reducers: {
    addNotes: (state, action) => {
      const newNote = {
        id: nanoid(),
        text: action.payload.text,
        date: new Date().toLocaleDateString(),
      };
      state.notes.push(newNote);
      localStorage.setItem("notes-app-redux", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      const newNotes = state.notes.filter(
        (note) => note.id !== action.payload.id
      );
      state.notes = newNotes;
      localStorage.setItem("notes-app-redux", JSON.stringify(state.notes));
    },
    searchNotes: (state, action) => {
      state.searchText = action.payload;
      state.searchResults = state.notes.filter((note) =>
        note.text.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    editNote: (state, action) => {
      state.edit = action.payload;
      if (state.edit.text) {
        const updateNotes = state.notes.map((note) => {
          return note.id === state.edit.id ? action.payload : note;
        });
        state.notes = updateNotes;
        localStorage.setItem("notes-app-redux", JSON.stringify(state.notes));
        state.edit.state = false;
      }
    },
    toogleDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { addNotes, deleteNote, searchNotes, toogleDarkMode, editNote } =
  notesSlice.actions;
export const selectNotes = (state) => state.notes.notes;
export const selectResults = (state) => state.notes.searchResults;
export const selectSearchText = (state) => state.notes.searchText;
export const selectDarkMode = (state) => state.notes.darkMode;
export const selectEditNote = (state) => state.notes.edit;

export default notesSlice.reducer;
