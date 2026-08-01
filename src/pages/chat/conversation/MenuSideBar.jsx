import React from "react";
import { Link } from "react-router-dom";

const MenuSideBar = () => {
  return (
    <>
      <div className="menuside-container d-flex pt-5">
        <div>
          <Link to="/user/dashboard" className="nav-link p-3 fw-bold">
            Chats
          </Link>
        </div>
        <div>
          <Link to="/user/archived" className="nav-link p-3 fw-bold">
            Archived
          </Link>
        </div>
        <div>
          <Link to="/user/profile" className="nav-link p-3 fw-bold">
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuSideBar;
