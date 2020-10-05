import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin">
      <div className="signin__container">
        <h3>Sign In</h3>
        <p className="signin__title">Email</p>
        <input className="signin__input" type="text" />
        <p className="signin__title">Password</p>
        <input className="signin__input" type="password" />
        <Link to="/home">
          <button className="signin__button">Sign In</button>
        </Link>
        <Link to="/register">
          <p className="signin__register">Register</p>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
