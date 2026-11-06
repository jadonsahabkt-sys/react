import React from 'react'

const Main_section = (props) => {
  return (
    <div className="main">
     <h1>{props.user} <span className="date">{props.days}</span></h1>
       <h3>{props.skills}</h3>
       <button className="btn1">{props.work}</button>
       <button className="btn2">Senior Level</button>
    </div>
  )
}

export default Main_section
