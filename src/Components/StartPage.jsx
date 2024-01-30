import React from "react";
import { NavLink } from "react-router-dom";

function StartPage() {
  return (
    <div className="flex m-20 justify-evenly">
      <div>
        <img
          src="./src/Images/dices 1.svg"
          alt="Dices"
          className="flex justify-center  scale-90"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <p className="font-bold text-[5rem]">DICE GAME</p>
        </div>
        <div className="flex justify-end">
          <NavLink to='/main'>

          <button className=" bg-black text-white w-48 h-8 rounded-md hover:bg-white hover:text-black hover:border hover:border-black">Play now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default StartPage;