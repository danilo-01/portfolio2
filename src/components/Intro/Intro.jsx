import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { AiFillCaretDown } from "react-icons/ai";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [
        "Full-Stack Engineer",
        "Frontend Developer",
        "Backend Developer",
      ],
    });
  }, []);

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/portrait.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Danilo Costilla</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <AiFillCaretDown />
        </a>
      </div>
    </div>
  );
};

export default Intro;
