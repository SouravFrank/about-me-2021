import React from 'react';

function HeaderRoutes(props) {
    return (
        <div style={{ display: "inline", position: 'absolute', left: 10, top: 25 }}>
            <ul style={{ display: "inline" }}>
              <li style={{ display: "inline", margin: 10 }}>my projects</li>
              <li style={{ display: "inline", margin: 10 }}>about me</li>
              <li style={{ display: "inline", margin: 10 }}>contact me</li>
            </ul>
          </div>
    );
}

export default HeaderRoutes;