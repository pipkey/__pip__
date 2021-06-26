import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  let [data, setData] = useState(new Date());
  let h = data.getHours();
  let m = data.getMinutes();
  setInterval(() => {
    setData(new Date());
  }, 1000);

  let ZH = h >= 10 ? h : "0" + h;
  let ZM = m >= 10 ? m : "0" + m;
  // education, contacts, projects,about

  let anchor = [
    { to: "main", value: "Main" },
    { to: "about", value: "About Me" },
    { to: "projects", value: "Projects" },
    { to: "education", value: "Education" },
    { to: "contacts", value: "Contacts" },
  ];

  return (
    <div className="wrapper">
      <div class="wrapper__clock">{ZH + ": " + ZM}</div>

      <div class="wrapper__block">
        {anchor.map((el) => {
          return (
            <Link
              className="wrapper__item"
              activeClass="active"
              to={el.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {el.value}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
