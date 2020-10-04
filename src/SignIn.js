import React from "react";
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
        <button>Sign In</button>
        <p className="signin__register">Register</p>
      </div>
    </div>
  );
}

export default SignIn;
