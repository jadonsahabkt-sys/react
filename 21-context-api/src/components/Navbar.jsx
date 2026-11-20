import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
 
  const Data= useContext(ThemeDataContext)
  console.log(Data)

  return (
    <div className='nav'>
           <h2>Jadoun's hardware {Data}</h2>
            <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
