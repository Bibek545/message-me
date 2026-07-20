import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { registerUserApi } from "../../helper/authApi";

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      const value = formData[key].trim();

      if (!value) {
        alert(`${key} is required`);
        return;
      }
    }

    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password)
      return alert("Password does not match");
    console.log(formData);
    const result = await registerUserApi(rest);
    if (result.status === "success") {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="register-card">
            <h2 className="text-center mb-4">Create Account</h2>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fName"
                  placeholder="Enter your first name"
                  value={formData.fName}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lName"
                  placeholder="Enter your last name"
                  value={formData.lName}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Register
              </Button>
              <div className="text-center m-3">
                <p>
                  If you already have an account please{" "}
                  <Link to="/login" className="text-decoration-none">
                    Login{" "}
                  </Link>{" "}
                  here.
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
