import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Grid";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Table></Table>
      </React.Fragment>
    );
  }
}
