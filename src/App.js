import React from "react";
import Navbar from "./Component/Navbar"
import Text from "./Component/Text";
import Narrative from "./Component/Narrative";
import Percentbar from "./Component/Percentbar";
import Stories from "./Component/Stories";
import Foam from "./Component/Foam";
import Team from "./Component/Team";
import Faq from "./Component/Faq";
import Card from "./Component/Sliddersection/Card";
import './App.css';

function App() {
  return (
    <div className="hero">
      <div className="main-container">
      <Navbar/>
       <Text/>
       </div>
       <div className="s-p">
        <div className="scroll2">
      <p className="scroll">SCROLL FOR MORE</p>
      </div>
      <p className="point">^</p>
      </div>
      <Narrative/>
      <Card/>
      <Percentbar/>
      <Stories/>
      <Foam/>
      <Team/>
      <Faq/>
    </div>
  );
}

export default App;
