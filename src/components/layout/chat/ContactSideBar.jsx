import React from "react";
import { Button, Form } from "react-bootstrap";

const ContactSideBar = () => {
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
            <div className="me-4">
              <p>(avatar)</p>
            </div>
            <div className="">
              <p>Bibek </p>
              <p>See yaa</p>
            </div>
          </div>
          <div>
            <h6>7:33 pm</h6>
            <p>5</p>
          </div>
        </div>
        <div className="d-flex justify-content-between contactItem p-1">
          <div className="d-flex justify-content-center ">
            <div className="me-4">
              <p>(avatar)</p>
            </div>
            <div className="">
              <p>Bibek </p>
              <p>See yaa</p>
            </div>
          </div>
          <div>
            <h6>7:33 pm</h6>
            <p>5</p>
          </div>
        </div>{" "}
        <div className="d-flex justify-content-between contactItem p-1">
          <div className="d-flex justify-content-center ">
            <div className="me-4">
              <p>(avatar)</p>
            </div>
            <div className="">
              <p>Bibek </p>
              <p>See yaa</p>
            </div>
          </div>
          <div>
            <h6>7:33 pm</h6>
            <p>5</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSideBar;
