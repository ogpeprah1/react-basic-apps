import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function AnimationPage() {
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className="relative ">
      <div className="font-bold cursor-pointer" onClick={handleDrop}>
        Trivia{" "}
        <FontAwesomeIcon icon={drop ? faChevronUp : faChevronDown} size="1x"/>
      </div>
      <ul className={`${drop ? "visible" : ""} menu`}>
        <li>
          <a href="#">Start Trivia</a>
        </li>
        <li>
          <a href="#">Trivia History</a>
        </li>
      </ul>
    </div>
  );
}

export default AnimationPage;
