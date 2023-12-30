import React from "react";
import FirstHalfComponent from "../components/FirstHalfComponent";
import SecondHalfComponent from "../components/SecondHalfComponent";

function mainpage() {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <FirstHalfComponent />
      <SecondHalfComponent />
    </div>
  );
}

export default mainpage;
