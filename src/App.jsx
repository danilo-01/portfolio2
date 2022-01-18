import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <div className="links">
        <a href="https://github.com/danilo-01/">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/danilo-costilla-19554b16a/">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}

export default App;
