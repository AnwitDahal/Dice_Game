import React from 'react'

function ButtonClick({text,diff,resetBut,...rest}) {
    const ButtonClasses=`border border-black pb-[0.25rem] pt-[0.25rem] pr-7 pl-7 rounded-md mb-3 font-bold  text-sm ${diff}`
  return (
        <button className={ButtonClasses} onClick={resetBut}
        {...rest}
        >{text}</button>
  )
}

export default ButtonClick