import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  createNewConversationApi,
  deleteConversationApi,
  getMyConversationApi,
} from "../../../helper/conversationApi";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewConversationAction,
  getMyConversationAction,
  searchUserConversationAction,
} from "../../../feature/conversation/conversationAction";
import { getMessageAction } from "../../../feature/message/messageAction";
import { setSelectedConversationId } from "../../../feature/conversation/conversationSlice";
import { setSelectedConversation } from "../../../feature/conversation/conversationSlice.js";
const ContactSideBar = () => {
  const { conversations, searchedUsers } = useSelector(
    (state) => state.conversationsInfo,
  );
  const loggedUser = useSelector((state) => state.userInfo);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getMyConversationAction());
  }, []);

  const handleConversationClick = (conversation) => {
    dispatch(setSelectedConversation(conversation));
    dispatch(getMessageAction(conversation._id));
  };
  
  const handleOnSearch = (e) => {
    e.preventDefault();

    const payload = {
      search: search,
    };
    dispatch(searchUserConversationAction(payload));
    setShowSearchResults(true);
  };

  const handleSearchedUserClick = async (searchedUser) => {
    console.log(searchedUser._id);

    const payload = {
      id: searchedUser._id,
    };
    const result = await createNewConversationApi(payload);
    console.log(result);
    if (result.status === "success") {
      const conversation = result.data;

      dispatch(setSelectedConversation(conversation));
      dispatch(getMessageAction(conversation._id));

      dispatch(getMyConversationAction());
    } else {
      return "No User Found";
    }
    setShowSearchResults(false);
    setSearch("");
  };
  
  // for the delete button
  const handleOnDelete = async (conversationId) => {
    const response = confirm("Are you sure you want to delete this chat?");
    if (response) {
      const result = await deleteConversationApi(conversationId);
      if (result.status === "success") {
        dispatch(getMyConversationAction());
      }
    }
    console.log(conversationId);
  };
  

  return (
    <>
      <div className="contactContainer d-flex">
        <div className="contactContainer-header m-3">
          <h4>Chats</h4>
          <Form className="d-flex" onSubmit={handleOnSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search"
            />
            <Button variant="outline-primary" type="submit">
              Search
            </Button>
          </Form>

          {showSearchResults && (
            <div className="search-result">
              {searchedUsers.length > 0 ? (
                searchedUsers.map((searchedUser) => (
                  <div
                    key={searchedUser._id}
                    className="search-result-user"
                    onClick={() => handleSearchedUserClick(searchedUser)}
                  >
                    {searchedUser.fName} {searchedUser.lName}
                  </div>
                ))
              ) : (
                <div>No user found</div>
              )}
            </div>
          )}
        </div>
        <div className="conversation-list">
          <div className="">
            {conversations.map((conversation) => {
              console.log(conversation.members);

              const otherMember = conversation.members?.find(
                (member) => member._id !== loggedUser.user?.id,
              );

              return (
                <div
                  key={conversation._id}
                  className="conversation-item"
                  onClick={() => handleConversationClick(conversation)}
                >
                  <div className="conversation-top">
                    <div className="fw-bold">
                      {otherMember?.fName} {otherMember?.lName}
                    </div>
                  </div>
                  <div className="conversation-meta">
                    <div className="last-message">
                      {conversation.lastMessage?.message || "No messages yet"}
                    </div>

                    <div className="message-time">
                      {conversation.lastMessage?.createdAt
                        ? new Date(
                            conversation.lastMessage?.createdAt,
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })
                        : ""}
                    </div>
                  </div>{" "}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOnDelete(conversation._id);
                    }}
                  >
                    Delete
                  </Button>
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
