import React from "react";

const ChatHeader = () => {
  return (
    <>
      <div className="chatHeaderContainer d-flex justify-content-between">
        <div className="d-flex ">
          <p>(Avatar)</p>
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
