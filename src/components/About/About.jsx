import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="left">
        <h2>ABOUT ME</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi aliquam
          non reiciendis in omnis, dicta expedita. Eius, voluptates. Omnis,
          consequatur atque. Officiis illum labore voluptates vitae, et facilis
          soluta aperiam!
        </p>
        <a href="#contact">Contact Me</a>
      </div>
      <div className="right">
        <div className="imageContainer">
          <img src="assets/code.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
