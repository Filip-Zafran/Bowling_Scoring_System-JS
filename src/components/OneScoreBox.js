import React from "react";

function OneBox() {
  return (
    <table id="nameBox">
      <tbody>
        <tr>
          <td className="numberBox">1</td>
          <td className="numberBox">2</td>
          <td className="numberBox">3</td>
          <td className="numberBox">4</td>
          <td className="numberBox">5</td>
          <td className="numberBox">6</td>
          <td className="numberBox">7</td>
          <td className="numberBox">8</td>
          <td className="numberBox">9</td>
          <td className="numberBox">10</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td className="emptyBox">
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>

          <td className="emptyBox">
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="emptyBox">
            {" "}
            <td className="smallBoxEmpty"></td>
            <td className="smallBox"></td>
            <td className="smallBox"></td>
          </td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
        </tr>
        <tr>
          <td className="scoreBox"> 66</td>
        </tr>
      </tbody>
    </table>
  );
}

export default OneBox;
