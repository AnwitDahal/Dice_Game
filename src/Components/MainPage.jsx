import React, { useState } from "react";
import ScoreKeys from "./ScoreKeys";
import RollDice from "./RollDice";
import ButtonClick from "./ButtonClick";
import Rules from "./Rules";

function MainPage() {
  const [scoreV, setScoreV] = useState(0);
  const [selval, setSelVal] = useState(0);
  const [dice, SetDice] = useState(1);
  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  const Hell = () => {
    if (selval === 0) {
      setError("You have not selected any number");
    } else {
      setError("");
      let cumber = Math.floor(Math.random() * 6) + 1;
      console.log(cumber);
      SetDice(cumber);

      if (cumber === selval) {
        setScoreV((scoreV) => scoreV + cumber * 2);
      } else {
        setScoreV((scoreV) => scoreV + 0);
      }

      setSelVal(0);
    }
  };
  const resetBut = () => {
    setScoreV(0);
  };

  return (
    <main className="relative">
      <ScoreKeys
        error={error}
        setError={setError}
        setSelVal={setSelVal}
        selval={selval}
        scoreV={scoreV}
        setScoreV={setScoreV}
      />
      <RollDice dice={dice} Hell={Hell} />
      <div className="flex flex-col justify-center items-center mt-8">
        <ButtonClick
          text={"Reset Score"}
          resetBut={resetBut}
          diff="active:bg-black  active:text-white"
        />
        <ButtonClick
          text={"Show Rules"}
          diff="bg-black text-white  active:bg-white  active:text-black"
          onClick={()=>setShow(prev=>!prev)}
        >
          {show ? "Show" : "Hide"}
        </ButtonClick>
      </div>
      {show && <Rules />}
    </main>
  );
}

export default MainPage;
