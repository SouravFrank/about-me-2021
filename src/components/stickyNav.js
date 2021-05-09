import { AccessAlarmRounded } from "@material-ui/icons";
import React from "react";
import "../styles/navbar.css";

function StickyNav(props) {
  return (
    <div className="nav-container">
      <div style={{ width: 100, height: 100, backgroundColor: "yellowgreen" }}>
        <AccessAlarmRounded />
      </div>
      <div style={{ width: 100, height: 100, backgroundColor: "wheat" }}>2</div>
      <div style={{ width: 100, height: 100, backgroundColor: "violet" }}>
        3
      </div>
    </div>
  );
}

export default StickyNav;
