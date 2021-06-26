import React from "react";
import BTN from "./btnProj/btnProj";
import "./p.css";

const Pro = ({ text, src, alt, id, href1, href2 }) => {
  return (
    <div className={id % 2 == 0 ? "proj" : "projI"}>
      <div className="p__flex">
        <img className="image" src={src} alt={alt} />
        <div className="info">
          <span>{text}</span>
          <div className="btn__block">
           <BTN href={href2} name="code"/>
           <BTN href={href1} name="web"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;
