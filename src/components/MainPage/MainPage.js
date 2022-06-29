import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import catagories from "../../categories.json";
import "./MainPage.css";
function MainPage() {
  return (
    <div className="container-main-page">
      <Searchbar />
      <div className="main-page">
        <div className="inner-grid">adw</div>
        <div className="side-bar-container">
          <Sidebar catagories={catagories} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
