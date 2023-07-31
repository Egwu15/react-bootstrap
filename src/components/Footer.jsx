import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer() {
    const year = new Date().getFullYear();
  return (
    <Container style={{"backgroundColor": "#1B222C", "color": "white"}} fluid>
      <Row className=" text-center p-3">
        <h5>Copyright {year}</h5>
      </Row>
    </Container>
  );
}
export default Footer;
