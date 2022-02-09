import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
    const errorMessage = error 
        ? <div className="error">
        <p>Details not recognised!</p>
          <p>Please try again or try signing up!!</p>
          </div> 
        : '';

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await AuthService.login(username, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
          setError(error);
        }
      );
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <div>
      <form id="loginformcontainer" onSubmit={handleLogin}>
        <div id="loginform">
          <div id="forminputslogin">
          {errorMessage}
        <label>Username:</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div id ="forminputslogin">
        <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          </div>
          <button type="submit">Log in</button>
          </div>
      </form>
    </div>
  );
};

export default Login;