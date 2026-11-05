import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='Karan Singh' age={20} img="https://images.unsplash.com/photo-1617654112368-307921291f42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />

      <Card user='Karan Jadoun' age={21} img="https://images.unsplash.com/photo-1765679407077-68db218ef05b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>

      <Card user='Karan Jain' age={25} img="https://images.unsplash.com/photo-1683637855933-784df65cc524?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
   
    </div>
    
  )
}

export default App
