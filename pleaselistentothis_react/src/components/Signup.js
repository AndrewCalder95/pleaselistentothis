import React, { useState } from "react";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
    const errorMessage = error 
        ? <div className="error">
        <p>Account already exists!</p>
          <p>Try logging in!</p>
          </div> 
        : '';
  

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(firstName, secondName, artistName, username, password).then(
        (response) => {
            // console.log("Sign up successfully", response);
          navigate("/login");
          window.location.reload();
        },
        (error) => {
          console.log(error);
          setError(error)
        }
      );
    } catch (err) {
      console.log(err);
      setError(err)
    }
  };

  return (
    <div>
      <form id="signupformcontainer" onSubmit={handleSignup}>
        <div id ="signupform">
          <div id="forminputslogin">
          {errorMessage}
          <label>First Name:</label>
          <br/>
        <input
          type="text"
          placeholder="Optional"
            value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
          </div>
        <div id ="forminputslogin">
          <label>Second Name:</label>
          <br/>
        <input
          type="text"
          placeholder="Optional"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
          </div>
        <div id ="forminputslogin">
          <label>Artist/Band Name:</label>
          <br/>
        <input
          type="text"
          placeholder="Required"
            value={artistName}
            required
          onChange={(e) => setArtistName(e.target.value)}
        />
          </div>
        <div id ="forminputslogin">
          <label>Username:</label>
          <br/>
        <input
          type="text"
          placeholder="Required"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
          </div>
        <div id ="forminputslogin">
          <label>Password:</label>
          <br/>
        <input
          type="password"
          placeholder="Required"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <br/>
          <button type="submit">Sign up</button>
          </div>
      </form>
    </div>
  );
};

export default Signup;