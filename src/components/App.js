import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [clicked, setClicked] = useState(false)

 

  return (
    <div id="main">
      // Do not alter the main div
      {/* <p id="para">Para</p> */}
      <button id="click" onClick={()=>{setClicked(!clicked)}}>button</button>
      {clicked ? <p id="para">para</p> : null}
    </div>
  );
}


export default App;
