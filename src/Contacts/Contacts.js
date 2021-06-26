import React from "react";
import "./Contacts.css";
import vk from "../accets/contacts/vk.png";
import facebook from "../accets/contacts/facebook.png";
import github from "../accets/contacts/github.png";
import gmail from "../accets/contacts/gmail.png";
import instagram from "../accets/contacts/instagram.png";
import linkedin from "../accets/contacts/linkedin.png";
import telegram from "../accets/contacts/telegram.png";

const Contacts = () => {
  let links = [
    // { src: vk, alt: "vk", id: 1, href:"https://vk.com/p1p_key" },
    {
      src: facebook,
      alt: "FB",
      id: 2,
      href: "https://www.facebook.com/pil.kav.5",
    },
    { src: github, alt: "GH", id: 3, href: "https://github.com/pipkey" },
    { src: telegram, alt: "TG", id: 7, href: "http://tele.click/@pipkey" },
    {
      src: instagram,
      alt: "IM",
      id: 5,
      href: "https://www.instagram.com/____p1p_key____/",
    },
    {
      src: linkedin,
      alt: "LI",
      id: 6,
      href: "https://www.linkedin.com/in/philip-kamenkov-01bb19209/",
    },
    { src: gmail, alt: "GM", id: 4, href: "mailto:galagen2014@gmail.com" },
  ];

  return (
    <div id="contacts" className="contacts">
      <div className="contacts__links">
        {links.map((el) => {
          return (
            <a href={el.href} target="blank">
              <img src={el.src} alt={el.alt} />
            </a>
          );
        })}
      </div>
      <div className="contact__text">
          You can write me and
          let's tolk
          </div>
    </div>
  );
};

export default Contacts;
