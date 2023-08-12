import React from "react";
import Navbar from "./Component/Navbar"
import Text from "./Component/Text";
import Narrative from "./Component/Narrative";
import './App.css';

function App() {
  return (
    <div className="hero">
      <Navbar/>
       <Text/>
       <div className="s-p">
      <p className="scroll">SCROLL FOR MORE</p>
      <p className="point">^</p>
      </div>
      <Narrative/>
    </div>
  );
}

export default App;
