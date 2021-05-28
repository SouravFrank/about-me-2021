import React from "react";
import logo from "../assets/myphoto.jpg"

function IntroPic(props) {
  return (
    <div style={{ position: "absolute", left: "15vw", top: "20vh" }}>
      <img
        src={logo}
        style={{
          height: 200,
          width: 200,
          overflow: "hidden",
          border: "5px solid white",
          borderRadius: 150,
        }}
      />
    </div>
  );
}

export default IntroPic;
