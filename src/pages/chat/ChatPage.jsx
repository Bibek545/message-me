import React from 'react'
import ContactSideBar from '../../components/layout/chat/ContactSideBar.jsx'
import Conversation from '../../components/layout/chat/Conversation.jsx'
import ProfilePage from '../../components/layout/chat/ProfilePage.jsx'
// import MenuSideBar from './conversation/MenuSideBar.jsx'

const ChatPage = () => {
  return (
    <>
    <div className='chat-page m-3 p-3'>
        {/* <MenuSideBar /> */}
        <ContactSideBar />
        <Conversation />
        {/* <ProfilePage /> */}
    </div>
    </>
  )
}

export default ChatPage