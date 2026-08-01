import React from "react";
import { Outlet } from "react-router-dom";
import MenuSideBar from "../../pages/chat/conversation/MenuSideBar";

const UserLayout = () => {
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
