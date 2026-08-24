import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const MessageList = () => {
  const { messages } = useSelector((state) => state.messageInfo);
  const { user } = useSelector((state) => state.userInfo);
  // console.log(user);
// console.log("USER:", user);
// console.log("USER ID:", user?.id);
// console.log("USER _ID:", user?._id);
// console.log("SENDER:", messages[0]?.sender);
  return (
    <>
      <div className="message-list">
        {messages.map((message) => {
          <div key={message._id}>{message.message}</div>;
          if (message.sender === user?.id) {
            return (
              <div key={message._id} className="message-right">
                {message.message}
              </div>
            );
          } else {
            return (
              <div key={message._id} className="message-left">
                {message.message}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default MessageList;

// THIS IS THE TERNARY VERSION FOR IF AND ELSE STATEMENT

// className={
//   message.sender === user.id
//     ? "message-right"
//     : "message-left"
// }
