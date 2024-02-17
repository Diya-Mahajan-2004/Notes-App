// Notes.jsx
import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Notes({ id, title, text, date, type, handleDeleteNote }) {
  return (
    <div className="bg-sky-400 rounded-xl p-4 min-h-60 m-10 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{title}</h3>
        <button className="p-2 rounded-xl bg-white">{type}</button>
      </div>
      <p className="overflow-hidden overflow-ellipsis">{text}</p>
      <div className="flex items-center justify-between">
        <p>{date}</p>
        <MdDeleteForever onClick={()=> handleDeleteNote(id)} className="size-[1.3em] cursor-pointer" />
      </div>
    </div>
  );
}

export default Notes;
