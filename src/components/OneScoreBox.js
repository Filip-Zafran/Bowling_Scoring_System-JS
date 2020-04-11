import React from "react";

function OneBox() {
  return (
    <table id="nameBox">
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
        </tr>
        <tr>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
          <td className="emptyBox">" "</td>
        </tr>
      </tbody>
    </table>
  );
}

export default OneBox;
