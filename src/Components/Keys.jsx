
function Keys({ selval, setSelVal,Hell}) {
  const KeysVal = [1, 2, 3, 4, 5, 6];
  const selValHandler=(value)=>{
    setSelVal(value)
    console.log(value)
    Hell();
  }

  const diff = "bg-black text-white";
  const same = "bg-white text-black";

  return (
    <div className="flex flex-col items-end">
      <div className="text-red-500 text-xl mb-7">
      </div>
      <div>
        {KeysVal.map((value, index) => (
          <button
            onClick={()=>selValHandler(value)}
            className={`border border-black pt-3 mr-7 pb-3 pl-5 pr-5 font-bold ${selval === value ? diff : same}`}
            key={index}
          >
            {value}
          </button>
        ))}
      </div>

      <p className="font-bold text-xl mt-4">Select Number</p>
    </div>
  );
}
export default Keys;