import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import './LogIn.css'

function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logInStatus, setLogInStatus] = useState(null);

  const LogInHandler = () => {
    axios
      .post(`http://localhost:3001/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.auth) {
          localStorage.setItem("token", response.data.token);
          setLogInStatus(true);
        }
      });
  };
  return (
    <div className="login-container" >
      <div >
        <div className="nested-login-container">
          <h1>LogIn</h1>
          <input
            placeholder="username"
            className="input-login"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-login"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
          <button onClick={LogInHandler} className = {`btn-login`}>LogIn</button>
          <div className="sign-in-txt-container">
            <span className="sing-in-txt">Sign In</span>
          </div>
          </div>
         
        </div>
        <div>
          {logInStatus ? <Navigate to="/mainPage" replace={true} /> : null}
        </div>
      </div>
    </div>
  );
}

export default LogIn;
