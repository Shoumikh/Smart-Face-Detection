import React from "react";
import "./App.css";
import SignOut from "./SignOut";
import Logo from "./Logo";
import Rank from "./Rank";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InsertLink from "./InsertLink";
import FaceDetection from "./FaceDetection";
import SignIn from "./SignIn";
import Particles from "react-tsparticles";
import Register from "./Register";

function App() {
  const particleOptions = () => {};
  return (
    //for the particle Background
    <div className="App">
      <Particles
        className="particlejs"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Router>
        <div className="app">
          <Switch>
            <Route path="/home">
              <SignOut />
              <Logo />
              <Rank />
              <InsertLink />
              <FaceDetection />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
