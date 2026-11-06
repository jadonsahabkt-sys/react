import React from 'react'

const Footer = (props) => {
  return (
    <div className="footer">
      <p className="price">{props.salary} <span className="location">{props.city}</span></p>
      <button className="btn3">Apply Now</button>
    </div>
  )
}

export default Footer
