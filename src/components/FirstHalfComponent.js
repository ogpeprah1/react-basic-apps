import React, { useState } from "react";
import ContactComponent from "./contactComponent";

function FirstHalfComponent() {
  const Contacts = [
    { name: "Godfred", lastMessage: "Hi i am back", time: "10:00" },
    { name: "Jessi", lastMessage: "Hey", time: "6:00" },
    { name: "Ama", lastMessage: "Going to school?", time: "00:00" },
  ];

  const [searchItem, setSearchItem] = useState();

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="w-[30%] h-full">
      <div className="w-[100%] h-[70px] flex items-center px-3 bg-gray-200">
        <div className="rounded-[50%] w-[50px] h-[50px] bg-black"></div>
      </div>
      <form className="w-[100%] h-[60px] flex items-center justify-center bg-gray-100">
        <input
          onChange={changeHandler}
          type="text"
          value={searchItem}
          placeholder="Search or start a new chat"
          className="w-[95%] h-[40px] rounded-md focus:outline-none px-3 "
        />
      </form>
      {Contacts.map((e) => (
        <ContactComponent
          name={e.name}
          lastMessage={e.lastMessage}
          time={e.time}
        />
      ))}
    </div>
  );
}

export default FirstHalfComponent;
