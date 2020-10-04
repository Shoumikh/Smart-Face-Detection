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
        console.log(
          //informatiion from response api data
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {
        // there was an error
      }
    );
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
      </div>
    </div>
  );
}

export default InsertLink;
