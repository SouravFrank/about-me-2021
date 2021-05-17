import React from "react";
import "../styles/headerRoutes.css";

const RenderItem = ({ item }) => {
  const { title, click } = item;
  return <li className="list-item">{title}</li>;
};

function HeaderRoutes(props) {
  const routeList = [
    { title: "About Me", click: "" },
    { title: "Skills ", click: "" },
    { title: "Projects ", click: "" },
    { title: "Download Resume ", click: "" },
  ];
  return (
    <div className="header-route-container">
      <ul className="header-route-ul">
        {routeList.map((item) => (
          <RenderItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default HeaderRoutes;
