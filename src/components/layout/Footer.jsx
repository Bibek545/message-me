import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
              <div className="d-flex justify-content-center gap-3">
          <p>Home</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>FAQS</p>
          <p>About</p>
        </div>
        <hr />
        <div className="d-flex justify-content-center gap-3">
          <p>2026 Company, Inc</p>
          <p>Insta</p>
          <p>Facebook</p>
          <p>twitter</p>
        </div>
      </Container>

    </>
  );
};

export default Footer;
