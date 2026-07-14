import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import homePage from "../../assets/homePage.png";

const HomePage = () => {
  return (
    <>
      <Container className="home-container bg-light bg-gradient py-3 my-5 rounded">
        <Row className="align-items-center">
          <Col className="d-flex justify-content-between m-4">
            <div className="hero-container p-5 m-3">
              <h1> Connect instantly.</h1>
              <h1>Chat simply, Stay close </h1>
              <p>
                {" "}
                Message Me is a real-time chat application that keeps you
                connected with the people.
              </p>
              <Button className="m-1">Get Started</Button>
              <Button className="">Login</Button>
            </div>
            <div className="m-3">
              <img src={homePage}></img>
            </div>
          </Col>
          <Col className="d-flex justify-content-around">
            <div className="p-4 m-4 hero-card">
              <h4>Real-time Messaging</h4>
              <p>Send Message Instantly</p>
            </div>
            <div className="p-4 m-4 hero-card">
              <h4>Secure & Private</h4>
              <p>Conversations are secure and private</p>
            </div>
            <div className="p-4 m-4 hero-card">
              <h4>Connect Easily</h4>
                <p>Find and Connect with friends</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
