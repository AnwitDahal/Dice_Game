
const Rules = () => {


  return (
    <div className="flex justify-center">
    <div className="bg-[#FBF1F1] flex flex-col justify-center items-start p-6 m-6">
      <h1 className="flex items-start font-bold">
        How to play dice game
      </h1>
      <ul className="mt-3">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number
          you will get double point as dice
        </li>
        <li>if you get wrong guess then score remain same </li>
      </ul>
    </div>
  </div>
  );
};

export default Rules;