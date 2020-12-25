import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “This is about page.”
      </span>
      <span>- test</span>
    </div>
  );
}

export default About;