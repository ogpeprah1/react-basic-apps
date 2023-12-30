import React, { useState } from "react";

function SecondHalfComponent() {
  const [message, setMessage] = useState("");

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    console.log(message);
    e.preventDefault();
  };

  return (
    <div className="w-[70%] h-full grid grid-rows-[9.1%,80.9%,10%] grid-cols-1 bg-red-600">
      <div className="bg-gray-200 w-[100%] row-[1] col-[1]  p-2 border-l-2 border-gray-300">
        <div className="rounded-[50%] w-[50px] h-[50px] bg-black row-span-2 col-span-1"></div>
        <p className="row-auto col-auto font-bold"></p>
        <p className="row-[2] col-[2]"></p>
      </div>
      {/* container information is stored */}
      <div className="bg-orange-50 overflow-hidden row-[2] col-[1]"></div>

      {/*input to enter message */}
      <form className="w-[100%] flex gap-4 items-center justify-center bg-gray-200 row-[3] col-[1]">
        Emojis
        <form onSubmit={sendMessage} className="w-[80%] h-[40px]">
          <input
            value={message}
            onChange={changeHandler}
            type="text"
            className="w-[100%] rounded-md focus:outline-none p-3 "
          />
        </form>
        Voice Icon
      </form>
    </div>
  );
}

export default SecondHalfComponent;
