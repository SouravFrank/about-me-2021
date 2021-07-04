import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import scrollIdentifier from "../utils/scrollIdentifier";
import "../styles/navbar.css";

function StickyNav() {
  const [displayNav, setdisplayNav] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  const toggleVisible = () => {
    setdisplayNav(scrollIdentifier());
    !scrollIdentifier() && setToggleActive(false);
  };

  const onActiveToggle = () => {
    setToggleActive(!toggleActive);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      style={{ display: displayNav ? "inline" : "none", zIndex: 100 }}
      className="nav-container"
    >
      <div
        id="circularMenu1"
        className={`${
          toggleActive ? "active" : ""
        } circular-menu circular-menu-left`}
      >
        <a className="floating-btn" onClick={onActiveToggle}>
          {toggleActive ? (
            <CloseIcon class="iconSize" />
          ) : (
            <MenuIcon class="iconSize" />
          )}
        </a>

        <menu className="items-wrapper">
          <Tooltip
            TransitionComponent={Zoom}
            title="Home"
            placement="right"
            arrow
          >
            <a href="#" className="menu-item fa fa-home">
              <HomeIcon fontSize="large" />
            </a>
          </Tooltip>

          <Tooltip
            TransitionComponent={Zoom}
            title="My Journey"
            placement="right"
            arrow
          >
            <a href="#journey" className="menu-item fa fa-user">
              <AirplanemodeActiveIcon fontSize="large" />
            </a>
          </Tooltip>

          <Tooltip
            TransitionComponent={Zoom}
            title="My Skills"
            placement="right-start"
            arrow
          >
            <a href="#skills" className="menu-item fa fa-pie-chart">
              <SettingsEthernetIcon fontSize="large" />
            </a>
          </Tooltip>

          <Tooltip
            TransitionComponent={Zoom}
            title="Contact Me"
            placement="top-end"
            arrow
          >
            <a href="#ContactMe" className="menu-item fa fa-cog">
              <ForumIcon fontSize="large" />
            </a>
          </Tooltip>

          <Tooltip
            TransitionComponent={Zoom}
            title="My Resume"
            placement="top"
            arrow
          >
            <a href="#resume" className="menu-item fa fa-pie-chart">
              <AttachFileIcon fontSize="large" />
            </a>
          </Tooltip>
          
          {/* <a href="#" className="menu-item fa fa-cog"></a> */}
        </menu>
      </div>
    </div>
  );
}

export default StickyNav;
