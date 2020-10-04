import React from "react";
import "./FaceDetection.css";
import { useStateValue } from "./StateProvider";

function FaceDetection() {
  const [{ input, faceBox }] = useStateValue();
  return (
    <div className="faceDetection">
      {console.log("faceboc>>>>>" + faceBox.leftCol)}
      <img id="inputImage" src={input} alt="" width="100%" />
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
  );
}

export default FaceDetection;
