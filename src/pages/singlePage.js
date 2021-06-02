import React, { Component } from "react";
import HeaderRoutes from "../components/headerRoutes";
import IntroPic from "../components/introPic";
import IntroText from "../components/introText";
import StickyNav from "../components/stickyNav";
import Skills from "../components/skills";
import Projects from "../components/projects";
import RoadMap from "../components/roadMap";
import ScrollButton from "../components/scrollToTop";
import DownloadResume from "../components/downloadCV";
import { HeaderBg, FooterBg } from "../components/background";
import "../styles/common.css";

class SinglePage extends Component {
  render() {
    return (
      <div>
        <div className="element">
          <HeaderBg />
          <HeaderRoutes />
          <StickyNav />
          <IntroPic />
          <IntroText />
        </div>
        <div className="element"><RoadMap /></div>
        <div className="element">
          <DownloadResume />
        </div>
        <div className="element">
          <Skills />
        </div>

        <div className="element">
          <Projects />
        </div>
        {/* <ScrollButton /> */}
        <div className="element">
          <FooterBg />
        </div>
      </div>
    );
  }
}

export default SinglePage;
