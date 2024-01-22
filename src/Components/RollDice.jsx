import React, { useState } from "react";

function RollDice({dice,Hell}) {

  const num = `src/Images/DiceImages/dice_${dice}.svg`;
 

  return (
    <div>
      <div className="flex justify-center items-center mt-12 flex-col">
        <img
          src={num}
          alt=""
          className="scale-75 cursor-pointer"
          onClick={Hell}
        />
        <p className="font-semibold text-lg">Click on Dice to roll</p>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default RollDice;
