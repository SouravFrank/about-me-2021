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
import "../styles/intro.css";

class SinglePage extends Component {
  render() {
    return (
      <div>
        <HeaderBg />
        <HeaderRoutes />
        <StickyNav />
        <IntroPic />
        <IntroText />

        <RoadMap />
        <DownloadResume />
        <Skills />
        <Projects />
        <ScrollButton />
        <FooterBg />
        
      </div>
    );
  }
}

export default SinglePage;
