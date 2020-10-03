import React, { useState } from "react";
import "./InsertLink.css";
import { useStateValue } from "./StateProvider";
import Clarifai from "clarifai";

function InsertLink() {
  const [inputLink, setInputLink] = useState("");
  const [{ input }, dispatch] = useStateValue();

  const app = new Clarifai.App({
    apiKey: "21b5a7b6b56542ad9ab67fe9cad86a4e",
  });

  const handleClick = (e) => {
    //putting the state value to global state value in order to use it other components using useState
    dispatch({
      type: "SET_INPUT",
      input: inputLink,
    });
    console.log("eeeleee:"+input);

    //clarifai api tasks
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        "https://scontent.fdac60-1.fna.fbcdn.net/v/t1.0-9/67951724_2469422509819263_2330041997420658688_o.jpg?_nc_cat=108&_nc_sid=a4a2d7&_nc_ohc=_p6DgECTw4kAX-gLLaF&_nc_ht=scontent.fdac60-1.fna&oh=775b7475e36e35646589330eb5137fe0&oe=5FA04D0E"
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          // there was an error
        }
      );
  };

  const handleChange = (e) => {
    setInputLink(e.target.value);
  };

  return (
    <div className="insertLink">
      <div className="insertLink__info">
        {console.log(inputLink)}
        {console.log(input)}
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
