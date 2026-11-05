import React from 'react'

const Card = (props) => {
  return (
     <div className="parent">
       <div className="card">
         <img src={props.img} alt="images" />
        <h3>{props.user},{props.age}</h3>
        <p>React Developer. I am passionate about creating interactive and user-friendly web applications.</p>
        <button className="btn">View Profile</button>
       </div>
    </div>
  )
}

export default Card
