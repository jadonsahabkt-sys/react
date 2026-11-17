import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const App = () => {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

   useEffect(function(){
    console.log('use effect is runingg....');
   },[num])

  
   const [a, setA] = useState(0);
   const [b, setB] = useState(0);

   function aChanging(){
    console.log('A is change')
   }

   function bChange(){
    console.log('B is change')
   }

   useEffect(function(){
    aChanging()
   },[a])


   useEffect(function(){
    bChange()
   },[b])

  return (
    <div>
      <h1> value of num is {num}</h1>
      <h1> value of num2 is {num2}</h1>

      <button 
      onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
         setNum2(num2+10)
      }}>click</button>


<br/>
<br/>
          <h1>value of a is {a} </h1>
            <h1>value of b is {b} </h1>

          <button
           onClick={()=>{
            setA(a+1)
           }}> A change</button>

           <button 
           onClick={()=>{
            setB(b-1)
           }}>B change</button>
    </div>



  )
}

export default App
