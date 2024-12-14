import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hi")
      const response = await axios.post("http://localhost:5000/login", {
        username: username
      });
      console.log(response.data.message);
      if(response.data.message === 'Login successful'){
        setErrorMessage("Login successful")
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-div">
      <form onSubmit={handleSubmit} className="login-cont">
        <img src="" alt="" srcset="" />
        <div className="username-cont">
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="email-cont">
            <label htmlFor="">Email</label>
            <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
          </div>
        <div className="password-cont">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="submit-cont">
          <button type="submit" className="submit-btn">
            Login
          </button>
        </div>
        <div className="login-signup">
          <a href="" className="login-signup-link">
            New user ? Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
