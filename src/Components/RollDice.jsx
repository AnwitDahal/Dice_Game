
function RollDice({dice}) {

  const num = `src/Images/DiceImages/dice_${dice}.svg`;
 

  return (
      <div className="flex justify-center items-center mt-12 flex-col">
        <img
          src={num}
          alt=""
          className="scale-75 cursor-pointer"
        />
      </div>
  );
}

export default RollDice;