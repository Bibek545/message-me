import React from "react";
import { Link } from "react-router-dom";

const MenuSideBar = () => {
  return (
    <>
      <div className="menuside-container d-flex pt-5">
        <div>
          <Link to="/dashboard" className="text-decoration-none">
            Chats
          </Link>
        </div>
        <div>
          <Link to="/archived" className="text-decoration-none">
            Archived
          </Link>
        </div>
        <div>
          <Link to="/profile" className="text-decoration-none">
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuSideBar;
