import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    let navigate= useNavigate()
  return (

    <div className='py-3 px-5 bg-cyan-700'>
      <button
       className='bg-yellow-600 px-5 py-2 rounded-2xl m-2 cursor-pointer active:scale-95'
       onClick={()=>{
        navigate('/')
       }}>
        Return to Home page</button>
      <button
       className='bg-yellow-600 px-5 py-2 rounded-2xl m-2 cursor-pointer active:scale-95'
       onClick={()=>{
        navigate(-1)
       }}>
        Back</button>   
          <button
       className='bg-yellow-600 px-5 py-2 rounded-2xl m-2 cursor-pointer active:scale-95'
       onClick={()=>{
        navigate(+1)
       }}>
        Next</button>   
    </div>

  )
}

export default Nav2
