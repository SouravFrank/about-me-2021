import React from "react";
import "../styles/introPic.css";

function IntroPic(props) {
  return (
    <div className="image-conatainer">
      <img
        src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/153783697_3048041815299016_690202775965093221_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XX3eDbcgyG8AX-vIURt&_nc_ht=scontent.fccu3-1.fna&oh=3ae62a30b12fc5d5f1d11088293a6858&oe=60B52990"
        className="myPic"
        alt="my-pic"
      />
    </div>
  );
}

export default IntroPic;
