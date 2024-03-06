import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Coins from "./components/Coin";
import RandomColor from "./components/RandomColor";

function App() {
  return (
    <>
      <Coins />
      <RandomColor />
    </>
  );
}

export default App;
