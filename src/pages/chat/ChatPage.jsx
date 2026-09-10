import React, { useState } from 'react'
import ContactSideBar from '../../components/layout/chat/ContactSideBar.jsx'
import Conversation from '../../components/layout/chat/Conversation.jsx'
import ProfilePage from '../../components/layout/chat/ProfilePage.jsx'
// import MenuSideBar from './conversation/MenuSideBar.jsx'


const ChatPage = () => {
  const [showConversation, setShowConversation] = useState(false);


  return (
    <>
      <div className='chat-page'>
        {/* <MenuSideBar /> */}
        <div className={`contact-wrapper ${showConversation ? "hide-contact" : "show-contact"}`}>

          <ContactSideBar onShow={() => setShowConversation(true)} />

        </div>
        <div className={`conversation-wrapper ${showConversation ? "show-conversation" : "hide-conversation"}`}>
          <Conversation onBack={() => setShowConversation(false)}/>

        </div>
        {/* <ProfilePage /> */}
      </div>
    </>
  )
}

export default ChatPage