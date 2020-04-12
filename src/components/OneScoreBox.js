import React from "react";

function OneBox() {
  return (
    <table id="tableBox">
      <tbody>
        <tr>
          <td className="numberBox">
            <i>1</i>
          </td>
          <td className="numberBox">
            {" "}
            <i>2</i>
          </td>
          <td className="numberBox">
            {" "}
            <i>3</i>
          </td>
          <td className="numberBox">
            {" "}
            <i>4</i>
          </td>
          <td className="numberBox">
            {" "}
            <i>5</i>
          </td>
          <td className="numberBox">
            {" "}
            <i>6</i>
          </td>
          <td className="numberBox">
            {" "}
            <i>7</i>
          </td>
          <td className="numberBox">
            {" "}
            <i>8</i>
          </td>
          <td className="numberBox">
            {" "}
            <i>9</i>
          </td>
          <td
            className="numberBox"
            style={{ width: "110px", alignItems: "center" }}
          >
            <i>10</i>
          </td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td className="scoreBoxContainer">
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>

          <td className="scoreBoxContainer">
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="scoreBoxContainer">
            {" "}
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="scoreBoxContainer">
            {" "}
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="scoreBoxContainer">
            {" "}
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="scoreBoxContainer">
            {" "}
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="scoreBoxContainer">
            {" "}
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="scoreBoxContainer">
            {" "}
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="scoreBoxContainer">
            {" "}
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="scoreBoxContainer10">
            {" "}
            <td className="smallBox"></td>
            <td className="smallBox" style={{ marginLeft: "3px" }}></td>
            <td className="smallBox" style={{ marginLeft: "3px" }}></td>
          </td>
        </tr>
        <tr>
          <td className="scoreBox"> 6</td>
          <td className="scoreBox"> 14</td>
        </tr>
      </tbody>
    </table>
  );
}

export default OneBox;
