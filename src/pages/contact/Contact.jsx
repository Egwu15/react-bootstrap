import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="text-center" style={{height: "86vh"}}>
      <h1 className=" p-5">Contact Us</h1>
      <Container style={{ "max-width": "60%" }}>
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h2>Talk to a member of our Sales team</h2>
                </Card.Title>
                <Card.Subtitle className="p-3">
                  We’ll help you find the right products and pricing for your
                  business.
                </Card.Subtitle>
                <Button variant="dark">Dark</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h2>Product and account support</h2>
                </Card.Title>
                <Card.Subtitle className="p-3">
                  Our help center is fresh and always open for business. we’re
                  here to lend a hand.
                </Card.Subtitle>
                <Button variant="dark">Dark</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
