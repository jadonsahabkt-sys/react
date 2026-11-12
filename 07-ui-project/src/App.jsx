import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
    {
      img:'https://i.pinimg.com/736x/84/b0/53/84b053dde9730b0154c33e7ec8666488.jpg',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {  
      img:'https://i.pinimg.com/736x/d3/c0/f3/d3c0f3333d091c5c8eb079d09414a4fd.jpg',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {  
      img:'https://i.pinimg.com/736x/cb/40/7b/cb407b4991079b7693d181537daca2ca.jpg',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
     {  
      img:'https://i.pinimg.com/1200x/53/83/37/5383376f7dfcfca3cd19a34d591ee53b.jpg',
      intro:'',
      color:'pink',
      tag:'Underserved'
    },
    { 
      img:'https://i.pinimg.com/736x/ec/e3/9a/ece39a5a27e9d10f9b0808cb3477105a.jpg',
      intro:'',
      color:'orange',
      tag:'Underbanked'
    }
  ]


  return (
    <div >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
