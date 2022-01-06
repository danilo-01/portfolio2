import React from "react";
import "./portfoliolist.scss";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={"portfoiloList " + (active && "active")}
      onClick={() => {
        setSelected(id);
      }}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
