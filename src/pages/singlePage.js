import React, { Component } from "react";
import HeaderRoutes from "../components/headerRoutes";
import IntroPic from "../components/introPic";
import IntroText from "../components/introText";
import StickyNav from "../components/stickyNav";
import Skills from "../components/skills";
import Projects from "../components/projects";
import "../styles/introduction.css";
import { Timeline } from "./Timeline";

class SinglePage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: "0px",
            width: "0px",
            borderRight: "85vw solid white",
            borderTop: "100vh solid #aaa0ff",
          }}
        ></div>
        <HeaderRoutes />
        <StickyNav />
        <IntroPic />
        <IntroText />
        {/* <div style={{ width: "90vw", height: "200px" , display:"block" }}> */}
        {/* </div> */}
        <Skills />
        <Timeline />

        <Projects />
        {/* <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "2%",
            width: 100,
            height: 100,
            backgroundColor: "turquoise",
          }}
        >
          V
        </div> */}
        <div style={{ height: 1000 }}>
          <a
            href="https://drive.google.com/uc?export=download&id=1kjqseWcyDFxluUQKq46Hfonj1hc5B_Mo"
            download="cv.pdf"
          >
            Download
          </a>
          <h1>
            https://drive.google.com/file/d/1kjqseWcyDFxluUQKq46Hfonj1hc5B_Mo/view?usp=sharing
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h1>
        </div>
      </div>
    );
  }
}

export default SinglePage;
