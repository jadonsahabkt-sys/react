import React from 'react'
import Head from './Head'
import Main from './Main_section'
import Footer from './Footer'   

const Card = (props) => {
  return (
    <div className="card">
        <Head logo={props.logo}/>    
        <Main user={props.user} days={props.days} skills={props.skills} work={props.work} />
        <Footer salary={props.salary} city={props.city} />
    </div>
  )
}
export default Card
