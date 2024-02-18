import React from "react";
import { useState } from "react";

const Demo = () => {
  const [Text, setText] = useState("");
  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <div>
        <input
          className="border border-black w-72 px-2"
          type="text"
          value={Text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Demo;
