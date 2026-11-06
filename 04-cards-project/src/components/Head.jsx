import React from 'react'
import { Bookmark } from 'lucide-react';

const Head = (props) => {
  return (
    <div className="head">
       <img className="logo" src={props.logo} alt="logo" />
       <button className="save-btn">Save <Bookmark size={16} /></button>
    </div>
  )
}

export default Head
