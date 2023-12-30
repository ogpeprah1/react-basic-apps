import React from "react";

function ContactComponent(props) {
  return (
    <div className="bg-white w-[100%] h-[70px] grid grid-rows-1 grid-cols-[15%,85%] items-center justify-center px-3 border-b-2 border-gray-100 hover:bg-gray-200 duration-500">
      <div className="rounded-[50%] w-[50px] h-[50px] bg-black row-span-2 col-span-1"></div>
      <div className="row-[1] col-[2] flex flex-col">
        <div className="w-[100%] flex h-fit justify-between row-auto col-[2]">
          <p className="font-bold">{props.name}</p>
          <small className="font-bold italic">{props.time}</small>
        </div>
        <p className="row-[2] col-[2] italic font-semibold text-gray-500">
          {props.lastMessage}
        </p>
      </div>
    </div>
  );
}

export default ContactComponent;
