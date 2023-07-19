import React from "react";
import "./aboutMe.css";
import img from "./imgtwo.jpeg";
import imgtwo from "./tree.jpg";

function AboutMe() {
  return (
    <div className="container" id="aboutus">
      <div className="card-container">
        <div className="image-container">
          <img src={img} alt="" class="card-img" />
        </div>
        <div className="sub-heading">Data-Driven Decisions</div>
        <div className="info-text">
          Using cutting-edge analytics,we optimisze your marketing
          strategies,amplifying your impact and ensuring a solid ROI.
        </div>
      </div>
      <div className="card-container">
        <div className="image-container">
          <img src={imgtwo} alt="" class="card-img" />
        </div>
        <div className="sub-heading">Client Satisfaction</div>
        <div className="info-text">
          Your success is our mission.We're committed to exceeding your
          expectations adn earning your trust.
        </div>
      </div>
      <div className="card-container">
        <div className="image-container">
          <img src={img} alt="" class="card-img" />
        </div>
        <div className="sub-heading">Ongoing Support</div>
        <div className="info-text">
          Our partnership doesn't end with a campaingn-we offer comprehensive
          support to ensure your contineud growth and success
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
