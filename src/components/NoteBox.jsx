import React from "react";
import Notes from "./notes";
import AddNote from "./AddNote";

function NoteBox({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="grid grid-gap-2 grid-cols-2 ml-[400px] mt-[50px]">
      {notes.map((note) => (
        <Notes
          key={note.id} // Add key prop with unique identifier
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          type={note.type}
          handleDeleteNote ={handleDeleteNote}
          //heading={note.heading}
        />
      ))}

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NoteBox;

