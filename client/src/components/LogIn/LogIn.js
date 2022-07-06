import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./LogIn.css";
import { useCookies } from "react-cookie";

function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies([]);
  const [logInStatus, setLogInStatus] = useState(null);
  const navigate = useNavigate();

  const LogInHandler = () => {
    axios
      .post(`http://localhost:4000/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.auth) {
          setCookie("tokenCookie", response.data.token, { path: "/" });
          setLogInStatus(true);
        }
      });
  };

  return (
    <div className="login-container">
      <div>
        <div className="nested-login-container">
          <div className="login-title">Login</div>
          <input
            placeholder="Email"
            className="input-login"
            type="email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-login"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={`password`}
          />
          <div>
            <button onClick={LogInHandler} className={`btn-login`}>
              Login
            </button>
            <div className="sign-in-txt-container">
              <span className="sing-in-txt" onClick={() => navigate(`/signup`)}>
                Sign In
              </span>
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
