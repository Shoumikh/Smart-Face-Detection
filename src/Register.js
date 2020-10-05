import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <h3>Register</h3>
        <p className="register__title">Name</p>
        <input className="register__input" type="text" />
        <p className="register__title">Email</p>
        <input className="register__input" type="email" />
        <p className="register__title">Password</p>
        <input className="register__input" type="password" />
        <p className="register__title">Confirm Password</p>
        <input className="register__input" type="password" />
        <Link to="/home">
          <button className="register__button">Register</button>
        </Link>
      </div>
    </div>
  );
}
