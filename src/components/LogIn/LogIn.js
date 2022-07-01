import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

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
    <div>
      <h1>LogIn</h1>
      <div>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={LogInHandler}>LogIn</button>
      </div>
      <div>
        {logInStatus ? <Navigate to="/mainPage" replace={true} /> : null}
      </div>
    </div>
  );
}

export default LogIn;
