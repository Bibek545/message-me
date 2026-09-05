import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MenuSideBar from "../../pages/chat/conversation/MenuSideBar";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../feature/user/userAction";
import { socket } from "../../helper/socket.js";
import { setNewMessages } from "../../feature/message/messageSlice.js";

const UserLayout = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { selectedConversation } = useSelector(
    (state) => state.conversationsInfo,
  );

  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  useEffect(() => {
    if (user?.id) {
      socket.emit("addUser", user.id);
      console.log("EMITTING addUser:", user.id);
    }
  }, [user]);

  useEffect(() => {
    const handleReceiveMessage = (message) => {
      console.log("LIVE MESSAGE:", message);
      if (message.conversationId === selectedConversation?._id) {
        console.log("Same conversation");
        dispatch(setNewMessages(message));

      } else {
        console.log("Different conversation")
      }
    };

    socket.on("ReceiveMessage", handleReceiveMessage);

    return () => {
      socket.off("ReceiveMessage", handleReceiveMessage);
    };
  }, [dispatch, selectedConversation]);
  return (
    <>
      <div className="userLayout">
        <div className="sidebar fw-bold text-black">
          <MenuSideBar />
        </div>
        <main className="userContent">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserLayout;
