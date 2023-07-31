import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

import headerImage1 from "../../../assets/header/header_image1.jpg";
import headerImage2 from "../../../assets/header/header_image2.jpg";
import headerImage3 from "../../../assets/header/header_image3.jpg";

function HomeCarousel() {
  const carouselDetails = [
    {
      image: headerImage3,
      title: "Explore Our New Collection",
      body: "Discover the latest trends and styles in our new collection. Don't miss out on our limited-time offers!",
    },
    {
      image: headerImage2,
      title: "Unleash Your Creativity",
      body: "Our products are designed to inspire. Start your creative journey with us and see where it takes you.",
    },
    {
      image: headerImage1,
      title: "Quality You Can Trust",
      body: "We believe in the power of quality. That's why we ensure every product meets our high standards before it reaches you.",
    },
  ];

  return (
    <Carousel>
      {carouselDetails.map((carousel, index) => (
        <Carousel.Item key={index}>
          <div style={{ height: "500px", width: "2000px", overflow: "hidden" }}>
            <Image src={carousel.image} fluid />
          </div>
          <Carousel.Caption>
            <h3>{carousel.title}</h3>
            <p>{carousel.body}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default HomeCarousel;
