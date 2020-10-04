import React, { useState } from "react";
import "./InsertLink.css";
import { useStateValue } from "./StateProvider";
import Clarifai from "clarifai";

function InsertLink() {
  const [inputLink, setInputLink] = useState("");
  const [{ input }, dispatch] = useStateValue();

  //sets api key for using clarifie api
  //api key from clarifie website
  const app = new Clarifai.App({
    apiKey: "21b5a7b6b56542ad9ab67fe9cad86a4e",
  });

  //handles detect button
  const handleClick = (e) => {
    //putting the state value to global state value
    // in order to use it other components using useState
    dispatch({
      type: "SET_INPUT",
      input: inputLink,
    });
    //clarifai api tasks
    //first one is model name
    //second one is image link
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, inputLink).then(
      function (response) {
        //getting necessary api data for creating box around the faces
        //informatiion from response api data
        setFaceBoxInfo(
          calculatefFaceBoxPoints(
            response.outputs[0].data.regions[0].region_info.bounding_box
          )
        );
      },
      function (err) {
        console.log(err); //prints out errors if any
      }
    );
  };

  //calculates the face box points using the api informations
  //and given image height width info
  const calculatefFaceBoxPoints = (dataClarifai) => {
    const image = document.getElementById("inputImage");
    const width = image.width;
    const height = image.height;
    console.log(`width ${width}`);
    console.log(`height ${height}`);
    console.log(`legt ${image.top}`);
    console.log(dataClarifai.left_col * width);
    return {
      leftCol: dataClarifai.left_col * width,
      rightCol: width - dataClarifai.right_col * width,
      topRow: dataClarifai.top_row * height,
      bottomRow: height - dataClarifai.bottom_row * height,
    };
  };

  const setFaceBoxInfo = (faceBoxInfo) => {
    console.log("info" + faceBoxInfo.leftCol);
    dispatch({
      type: "SET_FACEBOX",
      faceBox: {
        leftCol: faceBoxInfo.leftCol,
        rightCol: faceBoxInfo.rightCol,
        topRow: faceBoxInfo.topRow,
        bottomRow: faceBoxInfo.bottomRow,
      },
    });
  };

  //handles changes in the text field
  const handleChange = (e) => {
    setInputLink(e.target.value);
  };

  return (
    <div className="insertLink">
      <div className="insertLink__info">
        <p>
          Please insert the link of your image and let the Smart Face Detection
          figure out the faces in the picture
        </p>
      </div>
      <div className="insertLink__input">
        <input onChange={handleChange} type="text" placeholder="Insert Link" />
        <button onClick={handleClick}> Detect</button>
        {console.log(calculatefFaceBoxPoints.leftCol)}
      </div>
    </div>
  );
}

export default InsertLink;
