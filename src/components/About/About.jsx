import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="left">
        <h2>ABOUT ME</h2>
        <p>
          Hello! My name is Danilo Costilla (dah-knee-low kow-stee-yah) and I am
          a fullstack software engineer. I got my education from Springboard's
          online software engineer ocurse, see my certificate
          <a href="https://www.credential.net/a06fbbc6-f1ac-4528-bfe0-1b70dc7d5524">
            here
          </a>
          . I love to build things which is why my hobbies are programming,
          music production, putting together LEGO's and gardeing. Feel free to
          reach out if you would like to work together or just want to connect!
        </p>
        <a classname="button" href="#contact">
          Contact Me
        </a>
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
