import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState([]);


  // Fetch Method 
  async function getData() {
   const responce= await fetch('https://jsonplaceholder.typicode.com/posts/1')

   console.log(responce)
  }

  const getData1= async ()=>{
    const responce= await fetch('https://jsonplaceholder.typicode.com/posts/1')

      const data= await responce.json()
      console.log(data)
  }

  const users= async ()=>{
    const responce= await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await responce.json()
    console.log(data)
  }


  // Axios Method 

  const getDataWithAxios=async ()=>{
    const responce= await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(responce.data)
  } 


  // Axios method with loream picum website data
  
  const getDatawithLoreamPicsum=async ()=>{
    const responce=await axios.get('https://picsum.photos/v2/list')
     setData(responce.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
         <button onClick={getData1}>Get Data1</button>

      <button onClick={users}>Users Details</button>

      <button onClick={getDataWithAxios}>Axios get Data</button>

      <button onClick={getDatawithLoreamPicsum}>Loream PicSum</button>

      <div>
        {data.map(function(elem,idx){
            return <h3>heloo,{elem.author}{idx}</h3>
        })}
      </div>
    </div>
  )
}


export default App
