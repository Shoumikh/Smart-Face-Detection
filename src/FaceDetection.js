import React from "react";
import "./FaceDetection.css";
import { useStateValue } from "./StateProvider";

function FaceDetection() {
  const [{ input }] = useStateValue();
  return (
    <div className="faceDetection">
      <img src={input} alt="" width="100%" />
    </div>
  );
}

export default FaceDetection;
