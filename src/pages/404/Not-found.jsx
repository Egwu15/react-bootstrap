import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <div
      style={{ height: "85vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Container className="text-center " fluid>
        <h1>Not Found</h1>
        <p>Are you lost again? Try the HomePage</p>
      </Container>
    </div>
  );
};

export default NotFound;
