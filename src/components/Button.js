import React from "react";
import UIfx from "uifx";
import bowlSound from "../pix/bowl.mp3";
import strike from "../pix/strike.mp3";
import buttonPicture from "../pix/button.png";
import random from "./ScoreGenerator";

function Button() {
  const bowlFx = new UIfx(bowlSound);
  const strikeFx = new UIfx(strike);

  return (
    <button
      onMouseEnter={() => {
        bowlFx.play();
      }}
      onClick={() => {
        strikeFx.play();

        const blabla = random();
        console.log(blabla);
      }}
    >
      <img className="buttonPix" src={buttonPicture} alt="button for bowling" />
    </button>
  );
}

export default Button;

// SOUND scource
// https://alligator.io/react/adding-sound-to-your-react-apps/

// DICE ROLL
// https://leetcode.com/problems/dice-roll-simulation/
