import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginUserApi } from "../../helper/authApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

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

    const result = await loginUserApi(formData);
    if (result.status === "success") {
      const tokenJWT = result.token;
      localStorage.setItem("JWTtoken", tokenJWT);
    }
    setTimeout(() => {
      navigate("/user/dashboard");
    }, 1500);
  };
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="register-card">
            <h2 className="text-center">Login</h2>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                {" "}
                Login{" "}
              </Button>
              <div className="text-center m-3">
                <h6>
                  New user?{" "}
                  <Link to="/register" className="text-decoration-none">
                    Register{" "}
                  </Link>{" "}
                  here.
                </h6>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
