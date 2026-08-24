import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MenuSideBar from "../../pages/chat/conversation/MenuSideBar";
import { useDispatch } from "react-redux";
import { getUserAction } from "../../feature/user/userAction";

const UserLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAction());
  }, []);
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
