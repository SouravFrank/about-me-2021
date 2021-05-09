import React from "react";

function IntroPic(props) {
  return (
    <div style={{ position: "absolute", left: "15vw", top: "20vh" }}>
      <img
        src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/153783697_3048041815299016_690202775965093221_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XX3eDbcgyG8AX-vIURt&_nc_ht=scontent.fccu3-1.fna&oh=3ae62a30b12fc5d5f1d11088293a6858&oe=60B52990"
        style={{
          height: 200,
          width: 200,
          overflow: "hidden",
          border: "5px solid white",
          borderRadius: 150,
        }}
      />
    </div>
  );
}

export default IntroPic;
