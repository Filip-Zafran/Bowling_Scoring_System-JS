import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import Button from "./components/Button";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Table></Table>
        <Button></Button>
      </React.Fragment>
    );
  }
}
