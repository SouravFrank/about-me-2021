import React from "react";
import { downloadResumeConfig } from "../utils/config";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import "../styles/downloadCV.css";

const DownloadResume = () => {
  const { fileName, fileLink } = downloadResumeConfig;

  const gg = "google.com";
  return (
    <div>
      <a href={fileLink} download={fileName}>
        <div className="downloadBtn">
        <AttachFileIcon />
            Download</div>
      </a>
    </div>
  );
};

export default DownloadResume;
