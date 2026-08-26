import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createMessageApi } from "../../../helper/messageApi";
import { setNewMessages } from "../../../feature/message/messageSlice";
import { getMyConversationAction } from "../../../feature/conversation/conversationAction";
import socket from "../../../helper/socket";

const MessageInput = () => {
  const { selectedConversation } = useSelector(
    (state) => state.conversationsInfo,
  );

  const { user } = useSelector((state) => state.userInfo);

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const change = e.target.value;
    console.log(change);
    setMessage(change);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!selectedConversation) {
      console.log("No conversation selected");
      return;
    }
    const receiver = selectedConversation.members.find(
      (member) => member._id !== user.id,
    );

    console.log("RECEIVER:", receiver);
    const payload = {
      conversationId: selectedConversation._id,
      message: message,
    };

    console.log(payload.conversationId);

    const newMessage = await createMessageApi(payload);
    console.log("This is the new message", newMessage);

    if (newMessage.status === "success") {
      dispatch(setNewMessages(newMessage.newMessage));
      dispatch(getMyConversationAction());
      socket.emit("SendMessage", {
        receiverId: receiver._id,
          message: newMessage.newMessage,
      });
      setMessage("");
    }
  };
  {
    /*this is to trigger enter button manually to submit and
   another way is to wrap it into form which is more easy and convient
   */
  }
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
