import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import blogImage1 from "../../../assets/blog/blog_image1.jpg";
import blogImage2 from "../../../assets/blog/blog_image2.jpg";
import blogImage3 from "../../../assets/blog/blog_image3.jpg";
import blogImage4 from "../../../assets/blog/blog_image4.jpg";
import blogImage5 from "../../../assets/blog/blog_image5.jpg";
import blogImage6 from "../../../assets/blog/blog_image6.jpg";

const cardDetails = [
  {
    image: blogImage1,
    title: "Historic Church Architecture",
    subtitle: "Exploring the beauty of ancient places of worship",
  },
  {
    image: blogImage2,
    title: "Modern Church Designs",
    subtitle: "A look at contemporary religious architectural trends",
  },
  {
    image: blogImage3,
    title: "Church Interiors",
    subtitle: "The art and design inside places of worship",
  },
  {
    image: blogImage4,
    title: "Church Community",
    subtitle: "The role of the church in fostering community spirit",
  },
  {
    image: blogImage5,
    title: "Church Music",
    subtitle: "The importance of music in religious services",
  },
  {
    image: blogImage6,
    title: "Church History",
    subtitle: "Understanding the evolution of church practices",
  },
];

function onCardClicked() {
  console.log("card.title");
}

function BlogSection() {
  return (
    <Container xs={6} md={4}>
      <Row className="m-5 d-flex justify-content-center ">
        {cardDetails.map((card, index) => (
          <Card
            key={index}
            onClick={onCardClicked}
            className="m-5"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Img
                className="mb-2"
                src={card.image}
                height={"200px"}
                width={"200px"}
              />
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.subtitle}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
export default BlogSection;
