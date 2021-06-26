import React from "react";
import "./Main.css"
import photo from "../accets/vXJ8pceZqtE.jpg"
import Button from "../components/btn/btn";


const Main = () => {
  return (
    <div  id="main" className="main" >
      <div class="main__photo">
          <img src={photo} alt="my photo" />
      </div>
      <div className="title">
        <div class="title__name"> Hi my name is Phil</div>
        <div class="title__prof"> Front - End Developer</div>
        <Button/>
      </div>
    </div>
  );
};

export default Main;
