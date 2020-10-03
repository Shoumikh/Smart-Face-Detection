import React from "react";
import "./App.css";
import SignOut from "./SignOut";
import Logo from "./Logo";
import Rank from "./Rank";
import InsertLink from "./InsertLink";

function App() {
  return (
    <div className="App">
      <SignOut />
      <Logo />
      <Rank />
      <InsertLink />

      {/* faceDetection */}
    </div>
  );
}

export default App;
