import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { getMyConversationApi } from "../../../helper/conversationApi";
import { useDispatch, useSelector } from "react-redux";
import { getMyConversationAction } from "../../../feature/conversation/conversationAction";
import { getMessageAction } from "../../../feature/message/messageAction";
import { setSelectedConversationId } from "../../../feature/conversation/conversationSlice";
import { setSelectedConversation } from "../../../feature/conversation/conversationSlice.js";
const ContactSideBar = () => {
  const { conversations } = useSelector((state) => state.conversationsInfo);
  const loggedUser = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyConversationAction());
  }, []);

  // console.log(conversations);
  // console.log(loggedUser);

  // const handleConversationClick = (conversationId) => {
  //   dispatch(setSelectedConversationId(conversationId));
  //   dispatch(getMessageAction(conversationId));
    // console.log(getMessageAction(conversationId));
  //   console.log(dispatch(setSelectedConversationId(conversationId)));
  // };
    const handleConversationClick = (conversation) => {
      dispatch(setSelectedConversation(conversation))
    // dispatch(setSelectedConversation(conversation));
    dispatch(getMessageAction(conversation._id));
    // console.log(getMessageAction(conversationId));
    // console.log(dispatch(setSelectedConversationId(conversation)));
  };
  return (
    <>
      <div className="contactContainer d-flex">
        <div className="contactContainer-header m-3">
          <h4>Chats</h4>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </div>
        <div className="d-flex justify-content-between contactItem p-1">
          <div className="d-flex justify-content-center ">
            {conversations.map((conversation) => {
              console.log(conversation.members);

              const otherMember = conversation.members.find(
                (member) => member._id !== loggedUser.user?.id,
              );

              return (
                <div
                  key={conversation._id}
                  className="conversation-item"
                  onClick={() => handleConversationClick(conversation)}
                >
                  <div className="fw-bold">
                    {otherMember?.fName} {otherMember?.lName}
                  </div>

                  <div className="conversation-meta">
                    <div className="last-message">
                      {conversation.lastMessage?.message}
                    </div>

                    <div className="message-time">
                      {new Date(
                        conversation.lastMessage?.createdAt,
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSideBar;
