import React, { useEffect } from "react";
import { useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./portfolio.scss";
import portfolios from "../portfolioData";

const Portfolio = () => {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "fullstack",
      title: "Full-Stack",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setData(portfolios.frontend);
        break;
      case "backend":
        setData(portfolios.backend);
        break;
      case "fullstack":
        setData(portfolios.fullstack);
        break;
      default:
        setData(portfolios.frontend);
        break;
    }
  }, [selected]);

  return (
    <div id="portfolio" className="portfolio">
      <div className="left">
        <h1>PROJECTS</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </div>
      <div className="right">
        {data.map((portfolio) => {
          return (
            <div id={portfolio.id} className="project">
              <img src={portfolio.img} alt="" />
              <a href={portfolio.link}>{portfolio.title}</a>
              <div className="overlay"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
