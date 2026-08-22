import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createMessageApi } from "../../../helper/messageApi";

const MessageInput = () => {
  const selectedConversationId = useSelector(
    (state) => state.conversationsInfo.selectedConversationId
  );
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    const change = e.target.value;
    console.log(change);
    setMessage(change);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log("Conversation:", selectedConversationId);
    // console.log("Message:", message);
    const payload = {
      conversationId: selectedConversationId,
      message: message,
    };

    const newMessage = await createMessageApi(payload);
    console.log(newMessage);
  };
  return (
    <>
      <div className="message-box">
        <input
          type="text"
          className="messageInput-box"
          name=""
          value={message}
          onChange={handleOnChange}
          placeholder="Enter your message here"
        />
        <Button onClick={handleOnSubmit}>Send</Button>
      </div>
    </>
  );
};

export default MessageInput;
