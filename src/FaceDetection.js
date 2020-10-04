import React from "react";
import "./FaceDetection.css";
import { useStateValue } from "./StateProvider";

function FaceDetection() {
  const [{ input, faceBox }] = useStateValue();
  return (
    <div className="faceDetection">
      <div className="faceDetection__container">
        <img id="inputImage" src={input} alt="" height="400px" />
        <div
          className="faceDetection__box"
          style={{
            top: faceBox.topRow,
            bottom: faceBox.bottomRow,
            left: faceBox.leftCol,
            right: faceBox.rightCol,
          }}
        ></div>
      </div>
      {console.log("faceboc>>>>>" + faceBox.leftCol)}
    </div>
  );
}

export default FaceDetection;
