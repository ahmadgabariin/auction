import React from "react";
import "./Sidebar.css";
function Sidebar(props) {
  return (
    <div className="side-bar">
      {props.catagories.map((category , index) => (
        <div key={index} className = {`category`} >
          {category}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
