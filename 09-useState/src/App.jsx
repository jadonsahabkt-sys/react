import React, { useState } from 'react'
import Game from './Components/Game'


const App = () => {

  const [num,setNum] =useState(100)
  const [username,setUsername]=useState('Karan Thakur')
  const [array,setArray] =useState([10,20,30])
 
   function change(){
        setNum(30)
        setUsername('Karan singh')
        setArray([50,65,80])

   }


  return (
    <div>
      <h1>Value of num is :  {num}</h1>
       <h1>Value of arrays  is :  {array}</h1>
      <h1>Hello Guys, My Name is:  {username}</h1>
      <button onClick={change}>Click</button>

      <Game/>
    </div>
  )
}

export default App
