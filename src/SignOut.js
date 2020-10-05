import React from "react";
import { Link } from "react-router-dom";
import "./SignOut.css";

function SignOut() {
  return (
    <div className="SignOut">
      <Link to="/">
        <p className="signOut__tag">Sign Out</p>
      </Link>
    </div>
  );
}

export default SignOut;
