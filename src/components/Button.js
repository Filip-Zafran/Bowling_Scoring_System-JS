import React from "react";
import bowlSound from "../pix/bowl.mp3";
import strike from "../pix/strike.mp3";

function Button() {
  // var bowlSound = new Audio();
  // bowlSound.src = "bowl.mp3";

  //  strike = new Audio();
  // strike.src = "strike.mp3";

  return (
    <button id="button" hover="bowlSound.play" onclick="strike.play">
      {" "}
      BOWL{" "}
    </button>
  );
}

export default Button;
