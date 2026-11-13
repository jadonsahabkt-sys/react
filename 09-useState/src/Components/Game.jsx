import React, { useState } from 'react'

const Game = () => {

     const [value,setValue]=useState(0)

     function increaseValue(){
         setValue(value+1)
     }
     function decreaseValue(){
      setValue(value-1)
     }
       function jumbByFiveValue(){
      setValue(value+5)
     }

  return (
    <div>
      <h1 className='value'>{value}</h1>
      <button className='btn' onClick={increaseValue} >Increase</button>
      <button className='btn' onClick={decreaseValue}>Decrease</button>
        <button className='btn' onClick={jumbByFiveValue}>Jumb by 5</button>
    </div>
  )
}

export default Game
