import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleComponent from "./components/TitleComponent";
import SubHeadingComponent from "./components/SubHeadingComponent";
import ClockComponent from "./components/ClockComponent";

function App() {
  return (
    <center className="container">
      <div>
        <TitleComponent />
        <SubHeadingComponent />
        <ClockComponent />
      </div>
    </center>
  );
}

export default App;
