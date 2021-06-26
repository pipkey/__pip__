import React from "react";
import "./About.css";
import Hobby from "./HobbyComponent";
import billiard from "../accets/HobbyPict/billiard.png";
import travel from "../accets/HobbyPict/travel.png";
import music from "../accets/HobbyPict/music.png";
import books from "../accets/HobbyPict/books.png";
import coding from "../accets/HobbyPict/coding.png";
import DIY from "../accets/HobbyPict/DIY.png";
import eat from "../accets/HobbyPict/eat.png";
import language from "../accets/HobbyPict/language.png";
import move from "../accets/HobbyPict/move.png";
import perfomance from "../accets/HobbyPict/perfomance.png";
import sweem from "../accets/HobbyPict/sweem.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div class="about__title">ABOUT MYSELF</div>
      <div class="about__text">
        <p>
          Front-End developer with experience in creating SPA using React,
          Redux, HTML, CSS, JS. My free time is dedicated to Codewars, Photoshop
          and becoming familiar with NodeJS. In the future I see myself as a
          Full Stack Developer. Ready to consider project work and full-time
          employment.
        </p>
      </div>
      <div class="hobby__title">
        <span> My hobby</span>
      </div>
      <div class="hobby__list">
        {/* need component with picture & text */}

        <Hobby src={billiard} title="Billiard" />
        <Hobby src={travel} title="Travel" />
        <Hobby src={music} title="Music" />
        <Hobby src={books} title="Books" />
        <Hobby src={coding} title="Coding" />
        <Hobby src={DIY} title="DIY" />
        <Hobby src={eat} title="Food" />
        <Hobby src={language} title="Languages" />
        <Hobby src={move} title="Move" />
        <Hobby src={perfomance} title="Theater" />
        <Hobby src={sweem} title="Sweem" />
      </div>
    </div>
  );
};

export default About;
