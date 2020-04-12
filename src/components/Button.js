import React from "react";
import UIfx from "uifx";
import bowlSound from "../pix/bowl.mp3";
import strike from "../pix/strike.mp3";
import button from "../pix/button.png";

function Button() {
  function playSound() {
    const bowlSound = new UIfx({ asset: bowlSound });
    const strike = new UIfx({ asset: strike });
  }

  return (
    <button hover={bowlSound.play} onClick={strike.play}>
      <img className="buttonPix" src={button} alt="button for bowling" />
    </button>
  );
}

export default Button;

// scource
// https://alligator.io/react/adding-sound-to-your-react-apps/

// DICE ROLL
// https://leetcode.com/problems/dice-roll-simulation/
