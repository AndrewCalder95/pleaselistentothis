import React, { useState } from "react";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  

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
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <h3>Sign up</h3>
        <div>
        <label>First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
          </div>
        <div>
        <label>Second Name:</label>
        <input
          type="text"
          placeholder="Second Name"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
          </div>
        <div>
        <label>Artist Name:</label>
        <input
          type="text"
          placeholder="Artist Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
          </div>
        <div>
        <label>Username:</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
          </div>
        <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;