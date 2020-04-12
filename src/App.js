import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NameBox from "./components/NameBox";
import OneBox from "./components/OneScoreBox";
import TotalBox from "./components/Total";
import Button from "./components/Button";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>

        <div id="fullBox">
          {" "}
          <NameBox></NameBox>
          <OneBox></OneBox>
          <TotalBox></TotalBox>
        </div>

        <Button></Button>
      </React.Fragment>
    );
  }
}

// next step
// 2. create onclick button to create random number
//  - roll simulation
//  - randomiser (?) 10 pins
