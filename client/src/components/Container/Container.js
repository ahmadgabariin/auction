import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Navbar from "./../Navbar/Navbar";
import "./Container.css";
import AddItem from "./../AddItem/AddItem";
import LogIn from "../LogIn/LogIn";
function Container() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<LogIn />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Container;
