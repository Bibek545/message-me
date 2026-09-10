import React from "react";
import ChatHeader from "../../../pages/chat/conversation/ChatHeader.jsx";
import MessageList from "../../../pages/chat/conversation/MessageList";
import MessageInput from "../../../pages/chat/conversation/MessageInput";
import { FaArrowLeftLong } from "react-icons/fa6";

const Conversation = ({ onBack }) => {
  return (
    <>
      <div className="go-back p-2" onClick={onBack}><FaArrowLeftLong size={35} /></div>
      <div className="conversationContainer">

        <ChatHeader />
        <MessageList />
        <MessageInput />
      </div>
    </>
  );
};

export default Conversation;