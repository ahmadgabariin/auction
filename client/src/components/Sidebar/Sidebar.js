import React from "react";
import "./Sidebar.css";
function Sidebar(props) {
  return (
    <div className="side-bar">
      {props.catagories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </div>
  );
}

export default Sidebar;
