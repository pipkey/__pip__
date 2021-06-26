import React from "react";
import "./btnProj.css";

const BTN = ({ href, name }) => {
  return (
    <div className="btn">
      <a href={href} target="blank">{name}</a>
    </div>
  );
};

export default BTN;
