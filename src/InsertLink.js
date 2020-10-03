import React from "react";
import "./InsertLink.css";

function InsertLink() {
  return (
    <div className="insertLink">
      <div className="insertLink__info">
        <p>
          Please insert the link of your image and let the Smart Face Detection
          figure out the faces in the picture
        </p>
      </div>
      <div className="insertLink__input">
        <input type="text" placeholder="Insert Link" />
        <button>Detect</button>
      </div>
    </div>
  );
}

export default InsertLink;
