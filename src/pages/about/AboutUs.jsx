import React from "react";
import aboutImage from "../../assets/about/about.svg";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="text-center justify-center">
      <Container className="p-5">
        <h2>Calling the faithful</h2>
        <p className="m-4">"Uniting the Faithful: One Voice, One Purpose."</p>

        <div>
          <img
            className=" p-5  img-fluid"
            style={{ width: "50%" }}
            src={aboutImage}
            alt="text"
          />
        </div>
      </Container>
      <div className="p-5">
        <p style={{ maxWidth: "800px", margin: "auto" }}>
          "A gathering place for individuals from diverse faiths and beliefs,
          brought together by the common thread of spirituality and devotion. We
          are a community that celebrates the beauty of unity amidst diversity,
          recognizing that each individual's journey is unique and valuable. "
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
