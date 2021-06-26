import React from "react";
import Place from "./Place/Place";
import "./Education.css";
import school from "../accets/educationP/school.png";
import collage from "../accets/educationP/collage.png";
import courses from "../accets/educationP/course.png";

const Education = () => {
  let place = [
    {
      title: "School",
      src: school,
      text: "At school, I studied in a class with an English bias, I loved exact sciences and went to study computer science for extra hours, where I got acquainted with programming. At that time, I had to program in Flash 8 (draw mini films, design and create mini-games), which I was undoubtedly delighted with. Then everything went a little differently ...",
      id: 1,
    },
    {
      title: "Collage",
      src: collage,
      text: "In college, I studied to be an electrician (very similar to programming, but a little more dangerous :) ) There I met a wonderful person who taught computer science and he explained a lot to me how JS / HTML / CSS works, even taught me how to make money playing poker. Then he quit. And I am learning self-help tools like Photophot and Illustrator. In the end, after the end, I was looking for myself! He worked at huge enterprises for the production of carriages, in the theater as an actor! As a result, I decided to do what really brings me pleasure! And that's programming!",
      id: 2,
    },
    {
      title: "Courses",
      src: courses,
      text: "I decided to move towards front-end development! Studying the Internet, I came across wonderful IT-Incubator courses, where mentors threw up a lot of interesting problems to solve. This is where I got acquainted with React / Redux and TypeScript. At the same time, my friend put me in touch with one employer with whom I had been setting up internet shops for a year. Now I am ready and open for vacancies on a full-time basis!",
      id: 3,
    },
  ];

  return (
    <div id="education" className="education">
      <div className="title__e">Education</div>

      <div className="block__place">
        {place.map((el) => {
          return (
            <Place text={el.text} title={el.title} id={el.id} src={el.src} />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
