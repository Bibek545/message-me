import React from "react";
import { BsPerson } from "react-icons/bs";

const ChatHeader = () => {
  return (
    <>
      <div className="chatHeaderContainer d-flex justify-content-between">
        <div className="d-flex ">
          <p>
            <BsPerson />
          </p>
          <p>Bibek Hamal</p>
        </div>
        <div className="d-flex">
          <p>search</p>
          <p>setting</p>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
