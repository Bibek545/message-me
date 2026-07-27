import React from "react";
import ChatHeader from "../../../pages/chat/conversation/chatHeader.jsx";
import MessageList from "../../../pages/chat/conversation/MessageList";
import MessageInput from "../../../pages/chat/conversation/MessageInput";

const Conversation = () => {
  return (
    <>
    <div className="conversationContainer">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
    </>
  );
};

export default Conversation;
