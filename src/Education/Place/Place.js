import React from "react";
import "./Place.css";

const Place = ({ title, text, id, src }) => {
  return (
    <div className="wrap">
      <div className="educatiom__item">
        <div className="present">
          <img src={src} alt="" />
          <span className="name__place">{title}</span>
        </div>
        <p className="about__place"> {text}</p>
      </div>
    </div>
  );
};

export default Place;
