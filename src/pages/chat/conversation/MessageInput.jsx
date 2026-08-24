import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createMessageApi } from "../../../helper/messageApi";
import { setNewMessages } from "../../../feature/message/messageSlice";

const MessageInput = () => {
  const { selectedConversation } = useSelector(
    (state) => state.conversationsInfo,
  );

  const [message, setMessage] = useState("");
  const [state, setState] = useState({
    message: "",
  });
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const change = e.target.value;
    console.log(change);
    setMessage(change);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      conversationId: selectedConversation._id,
      message: message,
    };

    console.log(payload.conversationId);
    if (!selectedConversation) {
      console.log("No conversation selected");
      return;
    }
    const newMessage = await createMessageApi(payload);
    console.log("This is the new message", newMessage);

    if (newMessage.status === "success") {
      dispatch(setNewMessages(newMessage.newMessage));
    }
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnSubmit(e);
    }
  };
  return (
    <>
      <div className="message-box">
        <input
          type="text"
          className="messageInput-box"
          name=""
          onKeyDown={handleKeyDown}
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
