import React from "react";
import UIfx from "uifx";
import bowlSound from "../pix/bowl.mp3";
import strike from "../pix/strike.mp3";

function Button() {
  function playSound() {
    const bowlSound = new UIfx({ asset: bowlSound });
    const strike = new UIfx({ asset: strike });
  }

  return (
    <button id="button" hover={bowlSound.play} onClick={strike.play}>
      {" "}
      BOWL{" "}
    </button>
  );
}

export default Button;
