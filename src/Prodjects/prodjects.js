import React from "react";
import Pro from "../components/project";
import "./prodjects.css";
import soc from "../accets/projPict/soc.png";
import calc from "../accets/projPict/calc.png";
import todo from "../accets/projPict/todo.png";
import port from "../accets/projPict/portfolio.png";
import XO from "../accets/projPict/XO.png";

const Proj = () => {
  let ProjArr = [
    {
      src: soc,
      alt: "social",
      text: "My pet-project SOCIALNetwork",
      id:1,
      href1:"https://pipkey.github.io/soushal/#/",
      href2:"https://github.com/pipkey/soushal"
    },
    {
      src: calc,
      alt: "calc",
      text: "My pet-project Apple-calculator",
      id:2,
      href1:"https://pipkey.github.io/soushal/#/",
      href2:"https://github.com/pipkey/soushal"
    },
    {
      src: todo,
      alt: "todo",
      text: "My pet-project ToDoList",
      id:3,
      href1:"https://pipkey.github.io/soushal/#/",
      href2:"https://github.com/pipkey/soushal"
    },
    {
      src: port,
      alt: "portfolio",
      text: "My pet-project Portfolio",
      id:4,
      href1:"https://pipkey.github.io/soushal/#/",
      href2:"https://pipkey.github.io/soushal/#/"
    },
    {
      src: XO,
      alt: "tic-tac-toe",
      text: "My pet-game TIC-TAC-TOE ",
      id:5,
      href1:"https://pipkey.github.io/soushal/#/",
      href2:"https://github.com/pipkey/soushal"
    },
  ];

  return (
    <div id="projects" className="projects">
      <div class="projects__title">Projects</div>

      <div class="projects__block">
        {ProjArr.map((el) => {
          return <Pro src={el.src} alt={el.alt} text={el.text} id={el.id} href1={el.href1} href2={el.href2}/>;
        })}
      </div>
    </div>
  );
};

export default Proj;
