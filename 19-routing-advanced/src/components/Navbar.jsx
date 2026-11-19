import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className='flex items-center justify-between bg-amber-800'>
      <h2 className=' text-2xl font-bold px-10'>Jadoun's Hardware </h2>
      <div className='flex items-center p-5 gap-10'>
        <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
           <Link to='/product'>Product</Link>
            <Link to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
