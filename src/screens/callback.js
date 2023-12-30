import React, { useState } from "react";

function Callback({ getColor }) {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    if (value == "") {
      setActiveColor("");
      getColor("grey");
    } else {
      setActiveColor(value);
      console.log(activeColor);
      getColor(value);
    }
  };

  return (
    <input
      type="text"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
      className="w-[300px] h-[50px] p-3 font-bold"
      style={{ background: `${activeColor}` }}
    />
  );
}

export default Callback;
