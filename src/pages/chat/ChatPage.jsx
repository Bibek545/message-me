import React from 'react'
import ContactSideBar from '../../components/layout/chat/ContactSideBar'
import Conversation from '../../components/layout/chat/Conversation'
import ProfilePage from '../../components/layout/chat/ProfilePage'
import MenuSideBar from './conversation/MenuSideBar'

const ChatPage = () => {
  return (
    <>
    <div className='chat-page m-3 p-3'>
        {/* <MenuSideBar /> */}
        <ContactSideBar />
        <Conversation />
        <ProfilePage />
    </div>
    </>
  )
}

export default ChatPage