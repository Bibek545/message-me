import React from "react";
import ChatHeader from "../../../pages/chat/conversation/ChatHeader.jsx";
import MessageList from "../../../pages/chat/conversation/MessageList";
import MessageInput from "../../../pages/chat/conversation/MessageInput";

const Conversation = () => {
  return (
    <>
      <div className="conversationContainer">
        <ChatHeader />
        <MessageList />
        {/* <div className="fixed-input-bar"> */}
          <MessageInput />

        {/* </div> */}
      </div>
    </>
  );
};

export default Conversation;
