import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    axios.post("http://localhost:5000/create", {
      userName: name,
      password: password,
    });
  };
  return (
    <div className="login-div">
        <form action="" className="login-cont" onSubmit={handleSubmit}>
            <img src="" alt="" srcset="" />
          <div className="username-cont">
            <label htmlFor="">Username</label>
            <input type="text" value={name}
          onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="email-cont">
            <label htmlFor="">Email</label>
            <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="password-cont">
            <label htmlFor="">Password</label>
            <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="submit-cont">
            <button className="submit-btn" type="submit">
                Sign up
            </button>
          </div>
          <div className="login-signup">
            <a href="" className="login-signup-link">Already a user ? Login</a>
          </div>
        </form>
                 
    </div>
  );
}