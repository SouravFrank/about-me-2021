import React from "react";

export const HeaderBg = () => {
  return (
    <div
      style={{
        height: "0px",
        width: "0px",
        borderRight: "85vw solid white",
        borderTop: "100vh solid #aaa0ff",
      }}
    ></div>
  );
};

export const FooterBg = () => {
    return (
      <div
        style={{
          height: "0px",
          width: "0px",
          float: 'right',
          borderLeft: "75vw solid white",
          borderBottom: "80vh solid #aaa0ff",
        }}
      ></div>
    );
  };
  