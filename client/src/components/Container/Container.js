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
<<<<<<< HEAD:src/components/Container/Container.js
          <Route path="/" element={<LogIn />} />
          <Route path="/mainPage" element={<MainPage />} />
=======
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<MainPage />} />
>>>>>>> master:client/src/components/Container/Container.js
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Container;
