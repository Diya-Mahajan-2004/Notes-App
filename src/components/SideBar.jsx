// Sidebar.jsx
import React from "react";
import { TypeAnimation } from "react-type-animation";

function SideBar() {
  return (
    <>
      <div className="font-[Cursive] font-semibold absolute p-2 pt-[150px] list-inside pl-4 text-white">
        <TypeAnimation
          style={{ whiteSpace: "pre-line", height: "195px", display: "block" }}
          sequence={[
            `
    Tips for Writing Efficient Daily To-Do Notes:\n 
    -Use clear and concise language\n
    -Schedule tasks when possible\n
    -Don't overload yourself\n
    -Prioritize self-care \n
    -Use the "two-minute rule": \n   If a task takes less than two minutes, \n  do it immediately instead of adding to list.\n
    -Be flexible: Unforeseen events happen, \n so be prepared to adjust your list `, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            1000,
            "",
          ]}
          repeat={Infinity}
        />
      </div>
    </>
  );
}

export default SideBar;
