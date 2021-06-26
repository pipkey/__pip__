import React from "react";
import "./HobbyComponent.css";

const Hobby = (props) => {
  return (
    <div className="hobby__item">
      <img src={props.src} />
      <span className="hobby__t">{props.title}</span>
    </div>
  );
};

export default Hobby;
