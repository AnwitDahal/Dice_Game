function Score({scoreV}) {

  const ScoreValue=()=>{
    setScoreV(dice)
  }
  return (

    <div >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <p className="font-semibold text-7xl ">{scoreV}</p>
        </div>
        <p className="font-semibold text-2xl">Total Score</p>
      </div>
    </div>
  );
}

export default Score;