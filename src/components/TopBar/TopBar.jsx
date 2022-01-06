import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div id="topbar" className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Danilo Costilla
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(956)335-9568</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>danilo.01@live.com</span>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
