import React, { useState } from "react";
import Callback from "./callback";

function UIChange() {
  const [UIColor, setUIColor] = useState(null);

  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <div className="flex items-center flex-col justify-center gap-3">
      <div
        style={{ background: `${UIColor}` }}
        className={`p-5 outline-2 outline-black text-[10em] font-extrabold text-white flex items-center justify-center`}
      >
        HELLO
      </div>
      <Callback getColor={getColor} />
    </div>
  );
}

export default UIChange;
