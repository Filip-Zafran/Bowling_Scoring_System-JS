import React from "react";
import pins from "../pix/pins.png";
import "../../src/App.css";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pins} className="pins" alt="bowling pins" />
        <p>Keep score! </p>
        <br />
      </header>
    </div>
  );
}
export default Header;
