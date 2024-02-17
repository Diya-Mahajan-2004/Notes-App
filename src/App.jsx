import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import AddNoteButton from "./Navbar/AddNoteButton";
import SideBar from "./components/SideBar";
import NoteBox from "./components/NoteBox";
import AddNote from "./components/AddNote";
import SearchBar from "./Navbar/SearchBar";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Complete python game",
      text: "This is my first note!",
      date: "22/01/2024",
    },
    {
      id: nanoid(),
      title: "Make new Feature",
      text: "This is my second note!",
      date: "12/01/2024",
    },
    {
      id: nanoid(),
      title: "Sleep",
      text: "This is my third note!",
      date: "24/01/2024",
    },
  ]);

  //searchbox
  const[searchText, setSearchText] = useState('');

  //Saving in local storage

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      title: title,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <div className="bg-black w-[100%] h-[100%]">
        <div className="grid grid-cols-1">
          {/*<AddNoteButton />*/}

          

          <SideBar />
          <SearchBar handleSearchNote={setSearchText} />
          <NoteBox
            notes={notes.filter((note) => 
              note.text.toLocaleLowerCase().includes(searchText))}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </>
  );
}

export default App;
