import React, { useState } from "react";
import ListIcon from "@material-ui/icons/List";
import scrollIdentifier from "../utils/scrollIdentifier";
import "../styles/navbar.css";

function StickyNav(props) {
  const [displayNav, setdisplayNav] = useState(false);

  const toggleVisible = () => {
    setdisplayNav(scrollIdentifier());
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      style={{ display: displayNav ? "inline" : "none" }}
      className="nav-container"
    >
      <ListIcon />
    </div>
  );
}

export default StickyNav;
