import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
        <div className="register-card">
            <h2 className="text-center mb-4">Create Account</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
              type="text" 
              name="fName"
              placeholder="Enter your first name" />
            </Form.Group>
                        <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
              type="text" 
              name="lName"
              placeholder="Enter your last name" />
            </Form.Group>
                        <Form.Group className="mb-3">
              <Form.Label> Email</Form.Label>
              <Form.Control 
              type="email" 
              name="email"
              placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
              type="phone" 
              name="phone"
              placeholder="Enter your phone number" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              name="password"
              placeholder="Password" />
            </Form.Group>
                        <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm your password" />
            </Form.Group>

            <Button className='w-100' variant="primary" type="submit">
              Register
            </Button>
            <div className="text-center m-3">
                <p>If you already have an account please <Link to='/login' className="text-decoration-none" >
                Login </Link> here.</p>
            </div>
          </Form>
        </div>

        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
