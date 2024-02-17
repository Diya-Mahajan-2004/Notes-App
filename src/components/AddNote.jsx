import React, { useState } from "react";

function AddNote({ handleAddNote }) {
  let [noteTitle, setTitle] = useState(""); // State to manage the title text
  let [noteText, setNoteText] = useState("");
  let characterLimit = 200; // State to manage the note text

  // Function to handle changes in the title textarea
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Function to handle changes in the main note textarea
  const handleNoteChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
    
  };

 // Function to handle saving the note
const handleSaveClick = () => {
  if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
    handleAddNote(noteText, noteTitle); // Pass both title and text to the parent component
    setTitle(""); // Clear the title text after saving
    setNoteText(""); // Clear the note text after saving
  }
};



  return (
    <div className="bg-[#67d7cc] rounded-xl p-4 min-h-60 m-10 flex flex-col justify-between">
      {/* TITLE AREA */}
      <div>
        <textarea
          className="border-none resize-none bg-[#67d7cc] font-bold placeholder-gray-500 outline-none"
          placeholder="Type to title...."
          value={noteTitle}
          onChange={handleTitleChange}
          style={{ overflowWrap: "break-word" }}
        ></textarea>

        {/* MAIN NOTE*/}
        <textarea
          className="border-none resize-none bg-[#67d7cc] w-[450px] h-[100px] placeholder-gray-500 outline-none"
          placeholder="Type to add a note...."
          value={noteText}
          onChange={handleNoteChange}
          style={{ overflowWrap: "break-word" }}
        ></textarea>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button
          className="bg-white text-black rounded-2xl border-none pt-2 pb-2 pr-8 pl-8 hover:bg-slate-200 cursor-pointer "
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;