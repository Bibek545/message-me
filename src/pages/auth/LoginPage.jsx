import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
        <div className="register-card">
            <h2 className="text-center">Login</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3"> 
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
              ></Form.Control>
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              {" "}
              Login{" "}
            </Button>
            <div className="text-center m-3">
                <h6>New user? <Link to='/register' className="text-decoration-none">Register </Link> here.</h6>
            </div>
          </Form>
        </div>

        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
