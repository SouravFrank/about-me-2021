import React from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Typewriter from "./common/typewritter";
import { downloadResumeConfig } from "../utils/config";
import "../styles/downloadCV.css";

const DownloadResume = () => {
  const { fileName, fileLink } = downloadResumeConfig;

  return (
    <div id="resume" style={{ margin: "100px" }}>
      <Typewriter text="Here is my Resume..." />
      <a href={fileLink} download={fileName}>
        <div className="downloadBtn">
          <AttachFileIcon />
          Download Now
        </div>
      </a>
    </div>
  );
};

export default DownloadResume;
