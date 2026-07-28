import React from "react";
import { Button } from "react-bootstrap";

const MessageInput = () => {
  return (
    <>
      <div className="message-box">
        <input 
        type="text" 
        className="messageInput-box"
        placeholder="Enter your message here" />
        <Button>Send</Button>
      </div>
    </>
  );
};

export default MessageInput;
