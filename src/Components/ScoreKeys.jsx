import React from 'react'
import Keys from './Keys'
import Score from './Score'


function ScoreKeys({selval,setSelVal,scoreV,error,setError}) {



  return (
    <div className='flex justify-between m-8'>
      <Score scoreV={scoreV} />
      <Keys selval={selval} setSelVal={setSelVal}
      error={error}
      setError={setError}
      />
    </div>
  )
}

export default ScoreKeys