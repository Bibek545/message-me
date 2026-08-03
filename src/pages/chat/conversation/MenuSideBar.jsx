import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MenuSideBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnLogout = () => {
    localStorage.removeItem("jwtToken");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

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
        <div>
          <Button className="nav-link p-3 fw-bold" onClick={handleShow}>
            Logout
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleOnLogout}>
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MenuSideBar;
