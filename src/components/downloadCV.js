import React, { useState } from "react";
import Typewriter from "./common/typewritter";
import { downloadResumeConfig } from "../utils/config";
import "../styles/downloadCV.css";

const Download = ({ checked, setchecked, downloadResumeConfig }) => {
  const { fileLink } = downloadResumeConfig;

  const downloadFile = () => {
    if (!checked) {
      window.location = fileLink;
    }
    setchecked(!checked);
  };

  return (
    <div id="ms-container">
      <label for="ms-download">
        <div class="ms-content">
          <div class="ms-content-inside">
            <input
              onChange={downloadFile}
              value={checked}
              type="checkbox"
              id="ms-download"
            />
            <div class="ms-line-down-container">
              <div class="ms-line-down"></div>
            </div>
            <div class="ms-line-point"></div>
          </div>
        </div>
      </label>
    </div>
  );
};

const DownloadResume = () => {
  const [checked, setchecked] = useState(null);
  const props = { checked, setchecked, downloadResumeConfig };

  return (
    <div id="resume" style={{ margin: "100px", position: "relative" }}>
      <Typewriter text={["Here is my Resume...", "Click to download..."]} />
      <div style={{ position: "relative", margin: 100, paddingBottom: 280 }}>
        <Download {...props} />
      </div>
    </div>
  );
};

export default DownloadResume;
