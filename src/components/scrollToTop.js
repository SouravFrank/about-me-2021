import React, { useState } from "react";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import scrollIdentifier from "../utils/scrollIdentifier";
import "../styles/scrollToTop.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [changeComponent, setchangeComponent] = useState(false);

  const toggleVisible = () => {
    const decision = scrollIdentifier();
    setVisible(decision);
    if (!decision && changeComponent) {
      setchangeComponent(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const BeforeHover = () => <div className="normal-container">
    <ExpandLessIcon />
  </div>;

  const AfterHover = () => <div className="onHover-container">
    <ExpandLessIcon /> 
    <p>Go to Top</p>
  </div>;

  return (
    <div style={{ position: "fixed", float: "right", right: 10, bottom: 0 }}>
      <button
        onMouseEnter={() => setchangeComponent(true)}
        onMouseLeave={() => setchangeComponent(false)}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        {changeComponent ? <AfterHover /> : <BeforeHover />}
      </button>
    </div>
  );
};

export default ScrollButton;
