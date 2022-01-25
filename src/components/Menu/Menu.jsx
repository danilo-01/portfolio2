import React from "react";
import "./menu.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div id="menu" className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="links">
        <div className="itemContainer">
          <a href="https://github.com/danilo-01/">
            <AiFillGithub />
          </a>
        </div>
        <div className="itemContainer">
          <a href="https://www.linkedin.com/in/danilo-costilla-19554b16a/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
