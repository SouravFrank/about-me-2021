import React from "react";
import ReactLogo from "../assets/react.svg";
import NodeLogo from "../assets/nodejs-icon.svg";
import ReduxLogo from "../assets/redux.svg";
import MaterialUILogo from "../assets/material-ui.svg";
import SwaggerLogo from "../assets/swagger.svg";
import HtmlLogo from "../assets/html-5.svg";
import CssLogo from "../assets/css-3.svg";
import LinuxLogo from "../assets/linux-tux.svg";
import GitIcon from "../assets/git-icon.svg";

function RenderItem({ props }) {
  const { title, src } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        // justifyContent: "center",
        width: "25vw",
        height: 80,
        backgroundColor: "tomato",
        margin: 20,
        padding: 10,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          border: "2px solid white",
          borderRadius: 50,
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: 50,
            height: 50,
            // backgroundColor: "red",
            padding: 5,
            overflow: "hidden",
          }}
          src={src}
        />
      </div>
      <p style={{ fontSize: 18 }}>{title}</p>
    </div>
  );
}

function Skills(props) {
  const skillsArray = [
    { title: "React JS", src: ReactLogo },
    { title: "React Native", src: ReactLogo },
    { title: "Node JS", src: NodeLogo },
    { title: "Redux", src: ReduxLogo },
    { title: "Material UI", src: MaterialUILogo },
    { title: "Swagger", src: SwaggerLogo },
    { title: "HTML", src: HtmlLogo },
    { title: "CSS", src: CssLogo },
    { title: "Linux", src: LinuxLogo },
    { title: "Git", src: GitIcon },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {skillsArray.map((item) => (
        <RenderItem key={item.title} props={item} />
      ))}
    </div>
  );
}

export default Skills;
