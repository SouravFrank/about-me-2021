import React from "react";
import "../styles/introPic.css";
import myPic from "../assets/myPic.jpeg";

const IntroPic = (props) => {
  return (
    <div className="image-conatainer">
      <img src={myPic} className="myPic" alt="my-pic" />
    </div>
  );
};

export default IntroPic;
