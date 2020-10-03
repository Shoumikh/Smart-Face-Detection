import React from "react";
import { Brain } from "./brain2.png";
import Tilt from "react-tilt";
import "./Logo.css";

function Logo() {
  return (
    <div className="Logo">
      <Tilt
        className="Tilt"
        options={{ max: 50 }}
        style={{ height: 80, width: 80 }}
      >
        <div className="Tilt-inner">
          <img
            src="https://www.iconfinder.com/data/icons/abstract-electronics/64/artificial_intelligence-512.png"
            alt=""
            height="80"
          />{" "}
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
