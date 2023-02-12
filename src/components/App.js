import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [clicked, setClicked] = useState(false)

  const renderPara= ()=> {
    setClicked(true)
  }

 

  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={renderPara} >button</button>
      {clicked ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : null}
    </div>
  );
}


export default App;
